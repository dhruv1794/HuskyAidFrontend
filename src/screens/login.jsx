import {useState} from 'react';
function Login({onLogin, error}) {
    const [username, setUsername] = useState('')
    const handleLogin = (e)=>{
        e.preventDefault();
        onLogin(username);
    }
    return (
    <div className="login-screen dark">
        <div className="login-card">
        <div className="extra-bg jumbotron">
            <h3 className="tertiary">Please Login</h3>
        </div>
        <form  className="form-main tertiary-bg" id='login-form'>
            <div className="form-row">
            <input id="username" className="normal-border" name="username"  type="text" placeholder="Enter your username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            {error && <p>{error.error}</p>}
            <button  className="login-button" id='login-button' onClick={handleLogin}>Submit</button>
        </form>
        </div>
    </div>
    );
  }
  
  export  {Login};

