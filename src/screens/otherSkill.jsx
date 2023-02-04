
import JumboTron from '../assets/other_skill_jumbotron.png';
import NodeImage from '../assets/golang_node.png';
import Marketing from '../assets/marketing.png';
import TensorFlow from '../assets/tensorflow.png';
import BlockChain from '../assets/blockchain.png';




function OtherSkill({name}) {


    
    return (
      <div className="frontend-screen">
         <section className='jumbotron-section dark'>
           <div className="jumbotron">
           <p>Hi <span className="emphasize">{name}</span>  !</p>
             <p>As a developer, I have had to put on many hats.<br/> I have developed backend , scrappers, Animated Ibooks and much more </p>
        
             <a href="#contactMe" className="contact-me-button">Hire Me! </a>
           </div>
           <div>
           <div className='jumbotron-image-wrapper'>
                <img src={JumboTron} alt="Dhruv is coding"></img>
              </div>
           </div>
         </section>
        <section className="darker">
          <div className="general-header">
              Backend Development
            </div>
            <div className="general-subtitle">
          Nodejs, Golang and SailJS
            </div>
            <div className="skill-main">
                <div className="big-box vertically">
                   <p>
                     I have written and worked with production apps and developed complicated systems using NodeJS, Express, Golang, Gin and Gorm.
                     Architectured and developed RestAPI's , integrated OAuth authentication and worked with multiple third party API integrations. 
                    </p>
                </div>
                <div className="big-box vertically">
             
                      <img src={NodeImage} alt="people developing an app"></img>
                  
                </div>
            </div>

        </section>
        <section className="dark">
          <div className="general-header">
              Machine Learning
            </div>
            <div className="general-subtitle">
            Tensorflow, tensorboard, numpy, panda 
            </div>
            <div className="skill-main">
            <div className="big-box vertically">
             
             <img src={TensorFlow} alt="people developing an app"></img>
         
       </div>
                <div className="big-box vertically">
                   <p>
                     I am a Teaching Assisitant for Applied Machine Learning at Northeastern University. I have worked on multiple projects, have conduscted lectures on tensorflow, tensorboard, hyper parameter tuning and many morre topics. I am not an expert but definately understand the use cases of machine learning and its impact on our ever evolving tech space.
                   </p>
                </div>
               
            </div>
        </section>
        <section className="darker">
          <div className="general-header">
              Marketing &amp; Dropshipping
            </div>
            <div className="general-subtitle">
            Facebook marketing, pixel, google analytics 
            </div>
            <div className="skill-main">
                <div className="big-box vertically">
                   <p>
                     I have successfully run a dropshipping website. I used facebook for my marketing and used Shopify for website development.
                     
                   </p>
                </div>
                <div className="big-box vertically">
             
                      <img src={Marketing} alt="people developing an app"></img>
                  
                </div>
            </div>
        </section>
        <section className="dark">
          <div className="general-header">
              Blockchain
            </div>
            <div className="general-subtitle">
            Dapps, Solidity, Crypto
            </div>
            <div className="skill-main">
            <div className="big-box vertically">
             
             <img src={BlockChain} alt="people developing an app"></img>
         
       </div>
                <div className="big-box vertically">
                   <p>According to me this will shape tomorrow's web. I am learning how to make Dapps using Solidity. If anyone would like to loop me into a project I will be grateful for the best learning happens when creating new things.</p>
                </div>
               
            </div>
        </section>
        
      </div>
    );
  }
  
  export  {OtherSkill};