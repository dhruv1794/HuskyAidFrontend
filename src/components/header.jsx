import logo from '../assets/logo.png';
function Header({appState, setPage, logout}) {
    const {currentPage, isAuth, isAdmin} = appState;
    return (
    <header>
        <div className="logo-wrapper">
          <img src={logo} alt="Dhruv Mishra Logo" onClick={()=>setPage('home')}></img>
        </div>
        {isAuth && <ul className="header-list">
          <li><button className={currentPage === 'home'?"active-header desktop-only ":" desktop-only "} onClick={()=>setPage('home')}>Home</button></li>
          <li><button className={currentPage === 'frontend'?"active-header":""} onClick={()=>setPage('frontend')}>Frontend</button></li>
          <li><button className={currentPage === 'mobile'?"active-header":""} onClick={()=>setPage('mobile')}>Mobile</button></li>
          <li><button className={currentPage === 'other'?"active-header":""} onClick={()=>setPage('other')}>Skills</button></li>
          <li><button className={currentPage === 'about'?"active-header":""} onClick={()=>setPage('about')} >About</button></li>
          {isAdmin && <li><button className={currentPage === 'admin'?"active-header":""} onClick={()=>setPage('admin')} >Admin</button></li>}
          <li><a href="#contactMe">Contact me</a></li>
        
          <li><a className="contact-me-button" href="#logout" onClick={logout}>Logout</a></li>
        </ul>}
    </header>
    )
}

export  {Header};