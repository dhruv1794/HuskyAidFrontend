

import './App.css';
import {useState, useEffect,useCallback} from 'react';
import {Home, FrontendSkill, AboutMe, MobileDevelopmentSkill, PrivacyPolicy, OtherSkill, Login, Admin} from './screens';
import {Header, Footer, ContactMe} from './components';
import {isAuthenticated} from './services';
import {loginApi, logout, getMessages, addMessage} from './services'


const defaultLoggedOutState = {
  isAuth: false,
  error: null,
  currentUser: null,
  currentPage:'home',
  isAdmin:false,
}

const errorMessage = {
  'required-username':'You have entered an invalid username, please use only alpha numeric characters',
  'auth-insufficient':'You have provided insuffient information. Please try again with a different username.',
  'empty-username':'Username cannot be empty',
}

function App() {
  const [appState, setAppState] = useState(defaultLoggedOutState);
  const [contactMeMessages, setcontactMeMessages] = useState([]);
  const changePage = (page)=>{
    setAppState({...appState,currentPage:page});
  }


  const checkAuthentication= async ()=>  {
    let response;
    try {
      response = await isAuthenticated();
    } catch(err) {
      console.log('Error:', err);
    }
    if(response && response.user) {
      if(response.user.username === 'dhruv') {
        setAppState({...appState,  isAuth:true, currentUser:response.user, isAdmin:true});
      } else {
        setAppState({...appState,  isAuth:true, currentUser:response.user});
      }
    }
  }

  const handleLogin = async(username)=> {
    let response;
    if (username.length === 0 ) {
        setAppState({...appState, error: {error:errorMessage['empty-username']}}); 
    }
    try {
        response = await loginApi(username);
    } catch(err) {
        setAppState({...appState, error: {error:errorMessage[err.error]}});
    }
    if(response && response.username) {
      if(response.username === 'dhruv') {
        setAppState({...appState, currentUser: response.user, isAuth:true, error: null, isAdmin:true});
      }else {
        setAppState({...appState, currentUser: response.user, isAuth:true, error: null});
      } 
    }
  }

  const handleLogout = async()=>{
    try {
        await logout();
    } catch(err) {
        console.log('Error:', err);
        setAppState({...appState, error: err});
    }
    setAppState(defaultLoggedOutState);
  }

  const postMessages = async(message)=> {
    let response;
    try {
        response = await addMessage(message);
    } catch(err) {
        console.log('Error:', err);
        setAppState({...appState, error: err});
    }
    if(response && response.status === 'success') {
        return true;
    }
    return false;
  }

  const fetchMessages = useCallback(async()=>{
    let response;
    try {
        response = await getMessages();
    } catch(err) {
        console.log('Error:', err);
        setAppState({...appState, error: err});
    }
    if(response && response.messages) {
      setcontactMeMessages(response.messages);
    }
  },[])


  function getCurrentPage()  {
    if(appState.isAuth) {
      switch(appState.currentPage) {
        case "frontend":
          return <FrontendSkill setPage={changePage}/>
        case "about":
          return <AboutMe setPage={changePage}/>
        case "mobile":
          return <MobileDevelopmentSkill setPage={changePage}/>
        case "other":
          return <OtherSkill setPage={changePage}/>
        case "admin":
          return <Admin setPage={changePage} messages={contactMeMessages}/>
        case "privacy-policy":
          return <PrivacyPolicy/>
          default:
            return <Home setPage={changePage}/>
      }
    } else {
      return <Login onLogin={handleLogin} error={appState.error}/>
    }
   
  }





  useEffect(()=>{
    checkAuthentication();
  
  },[]);

  useEffect(()=>{
    if(appState.isAdmin) {
      fetchMessages();
    }
  },[appState.isAdmin, fetchMessages])





  return (
    <div className="App">
    <Header appState={appState}  setPage={changePage}  logout={handleLogout}/>
     {getCurrentPage()}
     <main>
      {appState.isAuth && !appState.isAdmin && <ContactMe handleContactMe={postMessages}/>}
      </main>
      <Footer setPage={changePage}></Footer>
    </div>
  );
}

export default App;
