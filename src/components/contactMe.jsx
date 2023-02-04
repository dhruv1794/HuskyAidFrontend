import mail from '../assets/mail-outline.svg';
import call from '../assets/call-outline.svg';
import location from '../assets/location-outline.svg';
import puff from '../assets/puff.svg';
import {useState} from 'react';

const defaultForm = {
    full_name:"",
    email:"",
    phone:"",
    message:"",
}

const defaultValidation = {
    fullNameValid:true,
    emailValid:true,
    phoneValid:true,
    message:true,
}
function ContactMe({handleContactMe}) {
    const [loader, setLoader] = useState(false);
    const [feedback, setFeedBack] = useState(false);
    const [formValues, setFormValues] = useState(defaultForm);
    const[errors, setError] = useState(defaultValidation);

    function handleChange(e) {
      e.persist();
      if(e.target.name === "full-name") {
        setFormValues((old)=>{
            return {
                ...old,
                full_name: e.target.value
            }
        })
      } else if(e.target.name === "email") {
        setFormValues((old)=>{
            return {
                ...old,
                email: e.target.value
            }
        })
      } else if(e.target.name === "phone") {
        setFormValues((old)=>{
            return {
                ...old,
                phone: e.target.value
            }
        })
      } else  {
        setFormValues((old)=>{
            return {
                ...old,
                message: e.target.value
            }
        })
      }
     
    }

    function validate() {
       
        let formvalid = true;
        //name validation
        if(!formValues.full_name || !formValues.full_name.match(/^[a-zA-Z ]+$/)) {
            formvalid = false;
            setError((old)=>{
                return{
                    ...old,
                    fullNameValid:false
                }
            })
        } else {
            setError((old)=>{
                return{
                    ...old,
                    fullNameValid:true
                }
            })
        }

        // email
        let lastAtPos =formValues.email.lastIndexOf("@");
        let lastDotPos =formValues.email.lastIndexOf(".");
        if (!formValues.email || 
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              formValues.email.indexOf("@@") === -1 &&
              lastDotPos > 2 &&
              formValues.email.length - lastDotPos > 2
            )
          ) {
            formvalid = false;
            setError((old)=>{
                return{
                    ...old,
                    emailValid:false
                }
            })
          } else {
            setError((old)=>{
                return{
                    ...old,
                    emailValid:true
                }
            })
        }

        // phone 
        if(!formValues.phone || !formValues.phone.match(/^\d{10}$/)) {
            formvalid = false;
            setError((old)=>{
                return{
                    ...old,
                    phoneValid:false
                }
            })
        } else {
            setError((old)=>{
                return{
                    ...old,
                    phoneValid:true
                }
            })
        }

        return formvalid;
    }
    
    const submitForm = async (e) => {
        e.preventDefault();
        setLoader(true);
        if(validate()) {
            let body = {
                full_name:formValues.full_name,
                email:formValues.email,
                phone:formValues.phone,
                message: formValues.message
            };
            const isMessageSent = await handleContactMe(body);
            if(isMessageSent) {
                setFeedBack(true);
            }
            setLoader(false);
            setFormValues(defaultForm);
        } else {
            setLoader(false);
            setFeedBack(false);
        }
       
    }

    return(
        <div className='container darker text-center' id="contactMe">
            <div className="general-header">
                Contact Me
            </div>
            <div className="general-subtitle">
                Get In Touch
            </div>
            <div className="contact-me-text">
            I am ready to create and harness your ideas.
            </div>
            <div className="contact-me-main">
                <div className="me-block">
                    <div className="info">
                       <img src={location} alt="location logo"/> San Jose, California 
                    </div>
                    <div className="info">
                        <img src={mail} alt="location logo"/> dhruvinity@outlook.com 
                    </div>
                    <div className="info">
                        <img src={call} alt="location logo"/> +16282208630 
                    </div>
                </div>
                <div className="contact-me-form">
                    <form>
                        <div className="form-row">
                            <input name="full-name" value={formValues.full_name} placeholder='Full Name *' onChange={handleChange} type="text" required className={errors.fullNameValid ? "normal-border" : "errorBorder"}></input>
                           
                        </div>
                        <span className={errors.fullNameValid ? "noshow" : "errorMessage"}>Invalid Name</span>
                        <div className="form-row">
                            <div className="form-col">
                                <input name="email" value={formValues.email} placeholder='Email *' onChange={handleChange} type="email" required className={errors.emailValid ? "normal-border" : "errorBorder"}></input>
                               
                            </div>
                            
                            <div className="form-col">
                                <input name="phone" value={formValues.phone} placeholder='Phone *' onChange={handleChange} type="number" required className={errors.phoneValid ? "normal-border" : "errorBorder"}></input>
                               
                            </div>
                            
                        </div>
                        <span className={errors.emailValid ? "noshow" : "errorMessage"}>Invalid Email Address</span>
                        <span className={errors.phoneValid ? "noshow" : "errorMessage"}>Please enter a valid 10 digit number</span>
                        <div className="form-row">
                            <textarea name="message" value={formValues.message} placeholder='Enter a message' onChange={handleChange} type="text" ></textarea>
                        </div>
                        <p className={feedback?"feedback":"noshow"}>Thanks for reaching out !</p>
                        <button className="contact-me-button" onClick={submitForm}> {loader ?<img src={puff} alt="loader"></img> :'Submit'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export  {ContactMe};