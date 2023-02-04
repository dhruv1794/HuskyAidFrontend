import logo from '../assets/logo.png';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

function Footer({setPage}) {
    let getYear = new Date().getFullYear() ;
    function goToLink(name) {
        const linkedinUrl = "https://www.linkedin.com/in/dhruvinity";
        const githubUrl = "https://www.github.com/dhruv1794";
        if(name === 'linkedin') {
            window.open(linkedinUrl, '_blank');
        } else {
            window.open(githubUrl, '_blank');
        }
    }
    return (
        <>
        <div className="footer dark">
            <div className="logo-wrapper">
                <img src={logo} alt="Dhruv Mishra Logo" onClick={()=>setPage('home')}></img>
            </div>
            <div>
                <p className="footer-text">@ Copyright {getYear}. All rights reserved <button onClick={()=>setPage('privacy-policy')} className="footer-button-link">Privacy Policy</button></p>
            </div>
            <div className="footer-links">
                <div>
                    <img src={github} alt="Github link to profile" onClick={()=>goToLink("github")}></img>
                </div>
                <div>
                    <img src={linkedin} alt="Linkedin link to profile"  onClick={()=>goToLink("linkedin")}></img>
                </div>
            </div>
        </div>
        </>
    )
}

export  {Footer};