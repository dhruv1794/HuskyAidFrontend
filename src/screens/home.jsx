
import JumboTron from '../assets/homeScreen_jimbotron.gif'
import self from '../assets/passport.jpg'
import resume from '../assets/resume.pdf'
import frontend from '../assets/web_design.png'
import backend from '../assets/backend_web.png'
import mobile from '../assets/mobile_dev.png'
import {WorkflowCard, WhatIDo, PortfolioCard} from '../components';




function Home({setPage, name}) {

   const webInfo = {
     img:frontend,
     header:"Frontend Development",
     content:"I use various web technologies to develop beautiful and authentic websites which are creative and responsive.",
   }
  
   const backendInfo = {
    img:backend,
    header:"Backend Development",
    content:"I have worked with technologies like nodejs, sailsjs , golang and have made extensive backends for e-commerce, scrappers",
  }
  const mobileInfo = {
    img:mobile,
    header:"Mobile App Development",
    content:"I can create apps for all the platforms including MacOS, Windows, Android and iOS using flutter.",
  }
   
    
    return (
      <div className="home-screen">
         <section className='jumbotron-section dark'>
           <div className="jumbotron">
           <p>Hi <span className="emphasize">{name}</span>  !</p>
             <p> I Am Dhruv Mishra</p>
            
             <p>A Full Stack Developer based out of Silicon Valley</p>
             <button className="contact-me-button" onClick={()=>setPage('about')}>Learn More</button>
           </div>
           <div>
              <div className='jumbotron-image-wrapper'>
                <img src={JumboTron} alt="Dhruv is coding"></img>
              </div>
           </div>
         </section>
         <section className="about-me darker container">
         <div className="general-header">
                About me
            </div>
            <div className="general-subtitle">
             Masters student at Northeastern University | Problem Solver | JS Expert
            </div>
            <div className='about-me-main'>
              <div className='self-image-wrapper'>
                <img src={self} alt="Dhruv Mishra"/>
              </div>
              <div className='about-me-content'>
                <p>
                <span className="emphasize">Experienced Developer</span> with a demonstrated history of working in the computer software industry. I have developed web-applications, mobile-applications and micro frontends. I love working with new technologies like VueJS, ReactJS, AngularJS, NodeJS, SailsJS etc. I am an expert at all things <span className="emphasize">Javascript</span>. Some of my most compelling work has been around the idea of implementing something that has not been done before. Problem solving drives me and I seek opportunities that enable me to be a better developer.
                </p>
                
                <a className='contact-me-button' href={resume} download="dhruv_resume">Download Resume</a>
              </div>
            </div>
         </section>
         <section className='what-i-do dark'>
            <div className="general-header">
                What I do
            </div>
            <div className="general-subtitle">
             My Services and skills
            </div>
            <div className='portfolio-container'>
              <WhatIDo info={webInfo}></WhatIDo>
              <WhatIDo info={backendInfo}></WhatIDo>
              <WhatIDo info={mobileInfo}></WhatIDo> 
            </div>
         </section>
          <section className='portfolio darker'>
            <div className="general-header">
                Portfolio
            </div>
            <div className="general-subtitle">
                Some of my favourite projects
            </div>
            <div className='portfolio-container'>
              <PortfolioCard type="widget"></PortfolioCard>
              <PortfolioCard type="extension"></PortfolioCard>
              <PortfolioCard type="scraper"></PortfolioCard>
              <PortfolioCard type="promate"></PortfolioCard>
              <PortfolioCard type="playapply"></PortfolioCard>
              <PortfolioCard type="garagesale"></PortfolioCard>
              
            </div>
          </section>
         <section className='dark aligner'>
            <div className="general-header">
                Workflow
            </div>
            <div className="general-subtitle">
                My work process
            </div>
            <div className='workflow-container'>
              <WorkflowCard type="discover"/>
              <WorkflowCard type="define"/>
              <WorkflowCard type="prototype"/>
              <WorkflowCard type="implement"/>
              <WorkflowCard type="manange"/>
            </div>
         </section>
        
      </div>
    );
  }
  
  export  {Home};