
import JumboTron from '../assets/mobile_humbotron.png'
import FlutterDev from '../assets/flutter_dev.png'
import Screen1 from '../assets/app_screen_1.png'
import Screen2 from '../assets/app_screen_2.png'
import Screen3 from '../assets/app_screen_3.png'
import Native from '../assets/native.png'




function MobileDev({name}) {

  function gotoGithub() {
    let url = "https://github.com/dhruv1794/garage-sale";
    window.open(url, '_blank');

  }
    
    return (
      <div className="frontend-screen">
         <section className='jumbotron-section dark'>
           <div className="jumbotron">
           <p>Hi <span className="emphasize">{name}</span>  !</p>
             <p>I develop using react-native and flutter.</p>
        
             <a href="#contactMe" className="contact-me-button">Hire Me! </a>
           </div>
           <div>
           <div className='jumbotron-image-wrapper'>
                <img src={JumboTron} alt="Dhruv is coding"></img>
              </div>
           </div>
         </section>
         <section className="darker container">
          <div className="general-header">
             Flutter
            </div>
            <div className="general-subtitle">
          Provider, Dart and Material
            </div>
            <div className="skill-main">
                <div className="big-box vertically">
                   <p>Made an Ecommerce App named Garage Sale for my final project in mobile web development.
                   Implemented backend with firebase. Used provider package to maintain state through the application.
                   Designed custom Widgets, Implemented authentication and many other features</p>
                </div>
                <div className="big-box vertically">
             
                      <img src={FlutterDev} alt="people developing an app"></img>
                  
                </div>
            </div>
            <div className="portfolio-container">
              <div className="gallery-wrapper">
                <img src={Screen1} alt="Screen 1 of garage sale"/>
              </div>
              <div className="gallery-wrapper">
                <img src={Screen2} alt="Screen 2 of garage sale"/>
              </div>
              <div className="gallery-wrapper">
                <img src={Screen3} alt="Screen 3 of garage sale"/>
              </div>
            
            </div>
            <div className="text-center">
            <button className="contact-me-button" onClick={gotoGithub}>View More on Github</button>
            </div>
            
        </section>
        <section className="dark">
          <div className="general-header">
              React Native
            </div>
            <div className="general-subtitle">
            React, JSX and Redux
            </div>
            <div className="skill-main">
                <div className="big-box vertically">
                   <p>Made an Portfolio management app using react native, redux.  React native is a framework for building native apps without having to maintain repetitive codebases. This means our React Native consultants can build native Android and iOS apps using almost the same code .</p>
                </div>
                <div className="big-box vertically">
             
                      <img src={Native} alt="people developing an app"></img>
                  
                </div>
            </div>
        </section>
        
      </div>
    );
  }
  
  export  {MobileDev};