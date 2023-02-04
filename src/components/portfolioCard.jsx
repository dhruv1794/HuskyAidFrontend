import playapply from '../assets/playapply.png';
import promate from '../assets/promate.webp';
import sezzle from '../assets/sezzle.png';
import flutter from '../assets/flutter-icon.svg';
import {useState} from 'react';

function PortfolioCard({type}) {
    let [isShow, changeShow] = useState(false);
    function showModal() {
        changeShow(!isShow)
    }
    let info = ()=>{
        var toReturn = {};
        switch(type) {
            case "playapply":
                toReturn = {
                    title:"Playapply",
                    class:"playapply",
                    logo:playapply,
                    content:"A video job portal built with vuejs and laravel. We built this from scratch and build many custom features like photo editing."
                }
                break;
            case "extension":
                toReturn = {
                    title:"Sezzle Chrome Extension",
                    class:"sezzle",
                    logo:sezzle,
                    content:"I build a chrome extension which reduced our integration time from 30 minutes to under a minute enabling our team to focus more on development."
                }
                break;
            case "widget":
                toReturn = {
                    title:"Sezzle Widget",
                    class:"sezzle",
                    logo:sezzle,
                    content:"I was responsible for Sezzle's Widget and products around it. Sezzle Widget is a micro-frontend(Widget) which could be integrated with E-commerce websites. I developed and maintained Sezzle Widget."
                }
                break;
            case "promate":
                toReturn = {
                    title:"Promate",
                    class:"promate",
                    logo:promate,
                    content:"An e-commerce website built with react, nodejs. I build the rest API's with express and helped in the frontend development."
                }
                break;
            case "garagesale":
                toReturn = {
                    title:"Garage Sale",
                    class:"flutter",
                    logo:flutter,
                    content:"A mobile app made on flutter with firebase as backend. An e-commerce platform where people can upload their products and buy products listed by other users."
                }
                break;
            default:
                toReturn = {
                    title:"Sezzle Scrapper",
                    class:"sezzle",
                    logo:sezzle,
                    content:"I build Sezzle-scrapper which would crawl on Sezzle's merchant website and look for our widget and report us of their status."
                }

        }
        return toReturn;
    }
    return(
        <div className="portfolio-card" onClick={showModal}>
            <button className={"card " + info().class} onClick={showModal}>
                <div className="overlay"></div>
                    <div className="circle">
                        <img src={info().logo} alt={info().title} />
                    </div>
                    <p>{info().title}</p>
            </button>
            <div className={isShow ? "portfolio-modal active" : "portfolio-modal"}>
                <div className="modal-content">
                    <span className="close" onClick={showModal}>&times;</span>
                    <p>{info().content}</p>
                    <button className='contact-me-button'> Learn More </button>
                </div>
            </div>
         </div>
    );
}

export {PortfolioCard};