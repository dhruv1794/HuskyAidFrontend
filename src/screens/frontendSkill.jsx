
import JumboTron from '../assets/frontendJumbotron.png';
import {Carousel, Accordian} from '../components';
import  npmImage from "../assets/npm.png";
import  moon from "../assets/moon.png";
import githubImage from "../assets/github.svg";
import linkedInImage from "../assets/linkedin.svg";
import InstaImage from "../assets/insta.png";
import fbImage from "../assets/fb.png";


const defaultFAQs = {
    'Do you know any frontend framework?': `
    I am framework agnostic, but i love playing with react, vue, angular.
    `,
    'Do you know any other way to build a website': `
   I can build a website with flutter and javascript
    `,
    'Can you make complex UIs':`
   Yes I can, but I am not very creative with design unless I have help. 
    `,
    "Do you know stae management?":"I have worked with Redux, Vuex and the Provider Pacakge",
    "Most complicated project":"Chrome extensions and elecron apps are very challenging."
  
  };

function FrontendSkill({name}) {

    const items = [
        {
            img:npmImage,
            id:1,
            header:'https://www.npmjs.com/~dhruv_js',
            content:"Published two SDKS that deal with Micro front ends"
        },{
            img:githubImage,
            id:2,
            header:'https://www.github.com/dhruv1794',
            content:"Have contributed to multiple open source projects."
        },
        {
            img:linkedInImage,
            id:3,
            header:"https://www.linkedin.com/in/dhruvinity",
            content:"I have a very good network on linkedIn. Please add me to connect further."
        },
        {
            img:InstaImage,
            id:4,
            header:'@dhruvinity',
            content:"Well add me !"
        },
        {
            img:fbImage,
            id:5,
            header:'dhruv mishra',
            content:"Add me, and if it was 2012 i would poke you"
        }
    ];


    
    return (
      <div className="frontend-screen">
         <section className='jumbotron-section dark'>
           <div className="jumbotron">
           <p>Hi <span className="emphasize">{name}</span>  !</p>
             <p>I will showcase a few things in frontend developement</p>
        
             <a href="#contactMe" className="contact-me-button">Hire Me! </a>
           </div>
           <div>
           <div className='jumbotron-image-wrapper'>
                <img src={JumboTron} alt="Dhruv is coding"></img>
              </div>
           </div>
         </section>
        <section className="darker carousel ">
        <div className="general-header">
               Carousel Implemntation
            </div>
            <div className="general-subtitle">
            I can implement complex carousels without the need of libraries
            </div>
            <div className="carousel-main aligner">
                <Carousel items={items}/>
            </div>
        </section>
        <section className="dark skill">
        <div className="general-header">
               Center a Div
            </div>
            <div className="general-subtitle">
            I can center a div both horizontally and <span className="emphasize">vertically</span>
            </div>
            <div className="skill-main">
                <div className="big-box-orange horizontally">
                    <div className="small-box"></div>
                </div>
                <div className="big-box-orange vertically">
                    <div className="small-box"></div>
                </div>
            </div>
        </section>
        <section className="darker accordian">
        <div className="general-header">
               FAQs
            </div>
            <div className="general-subtitle">
            Can I do this and that ? Small list of what I can do on the Web
            </div>
            <div className="skill-main">
                <Accordian entries={defaultFAQs}></Accordian>
            </div>
        </section>
        <section className="dark accordian">
        <div className="general-header">
               Animation
              
            </div>
            <div className="general-subtitle">
            I can do animation with CSS
            </div>
            <div className="animation-main">
            <img src={moon} alt="moon"></img>
            <div className="wave"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
            </div>
        </section>
        
        
        
      </div>
    );
  }
  
  export  {FrontendSkill};