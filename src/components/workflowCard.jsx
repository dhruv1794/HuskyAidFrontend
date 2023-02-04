import bulb from '../assets/bulb-outline.svg'
import define from '../assets/pencil-outline.svg'
import shapes from '../assets/shapes-outline.svg'
import code from '../assets/code-slash-outline.svg'
import diamond from '../assets/diamond-outline.svg'

function WorkflowCard({type}) {
    function getInfo() {
        var info = {};
        switch(type) {
            case "discover":
                info =  {
                    ...info,
                    img:bulb,
                    header: "Discover",
                    content: " I conduct user research to identify the problem I want to solve."
                }
                break;
            case "define":
                info =  {
                    ...info,
                    img:define,
                    header: "Define",
                    content: "I brainstorm possible design solutions to the identified problem."
                }
                break;
            case "prototype":
                info =  {
                    ...info,
                    img:shapes,
                    header: "Prototype",
                    content: "I create high fidelity design and prototype the screens."
                }
                break;
            case "implement":
                info =  {
                    ...info,
                    img:code,
                    header: "Implement",
                    content: "After designing, I deliver for implementation."
                }
                break;
            default:
                info =  {
                    ...info,
                    img:diamond,
                    header: "Manage",
                    content: "After development I provide assistance in the running of the implementation."
                }
                break;


        }
        return info;
    }

  


    return (
        
        <div className="workflow-card">
            <div className="logo-wrapper">
                <img src={getInfo().img} alt="Idea "></img>

            </div>
            <div className="header">
                {getInfo().header}
            </div>
            <div className='content'>
            {getInfo().content}
            </div>
        </div>
    )
}

export {WorkflowCard};