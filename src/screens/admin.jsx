import {MessageCard} from '../components';

function Admin({messages}) {
    return (
    <div className="login-screen dark">
        <div className="admin-main">
            { messages.map((message,index)=><MessageCard info={message.message} key={index} index={index+1}/>) }
        </div>
    </div>
    );
  }
  
  export {Admin};

