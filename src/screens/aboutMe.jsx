
import JumboTron from '../assets/about_me.png'
import AboutMeImage from '../assets/about_me_1.png'
import BasketBall from '../assets/about_me_2.png'




function AboutMe({name}) {


    
    return (
      <div className="about-me-screen">
         <section className='jumbotron-section dark'>
           <div className="jumbotron">
           <p>Hi <span className="emphasize">{name}</span>  !</p>
             <p>A little more about me</p>
        
             <a href="#contactMe" className="contact-me-button">Reach out</a>
           </div>
           <div>
              <div className='jumbotron-image-wrapper'>
                <img src={JumboTron} alt="Dhruv is coding"></img>
              </div>
           </div>
         </section>
        <section className="darker">
          <div className="general-header">
              Coding
            </div>
            <div className="general-subtitle">
            I love problem solving
            </div>
            <div className='about-me-main'> 
              <div className='self-image-wrapper'>
                <img src={AboutMeImage} alt="path to success or an idea"/>
              </div>
            <div  className='about-me-content'>
            As an enthusiastic and creative technologist with hands-on skills in a wide range of software, tools, and programming languages, I am well positioned to leverage my abilities and qualifications to thrive as your next software developer. Over the past 5 years, as a developer, I have designed, developed, and launched customised, highly responsive websites and e-commerce solutions using advanced technologies. 
            <ul className="about-me-list">
              <li>Designed and developed front-end for 180+ webpages using ReactJS, VueJs, JavaScript, HTML5, and CSS</li>
              <li>Built 100+ RestAPI Integrations with various backend stacks like gin, node, spring boot.</li>
              <li>Created user-centric e-commerce sites for small business owners using various web technologies including Shopify and WordPress</li>
              <li>Built Chrome extensions, electron apps and micro frontends.</li>
            </ul>
            </div>
            </div>
        </section>
        
        <section className="dark">
          <div className="general-header">
              BasketBall and Sports
            </div>
            <div className="general-subtitle">
           Something that I have been doing everyday forever
            </div>
            <div className='about-me-main'> 
              
            <div  className='about-me-content'>
            BasketBall and Gym has been my contant passion. It helps train my mind and body. If anyone wants to play or reach out to me for these activities I would be more than happy to tag along. I follow an athelete's diet and I train like one too. 
            <ul className="about-me-list">
              <li>I Follow a leg, push , pull split</li>
              <li>I bench 225 pounds</li>
              <li>I squat 385 pounds</li>
              <li>I deadlift 450 pounds</li>
            </ul>
            </div>
            <div className='gallery-wrapper'>
                <img src={BasketBall} alt="path to success or an idea"/>
              </div>
            </div>
        </section>
        
        
      </div>
    );
  }
  
  export  {AboutMe};

