function MessageCard({info, index}) {

    const {full_name,message ,phone,email} = info;
    return(
        <div className="message-card" >
  
                    <p>Sno: {index}</p>
                    <p>Name: {full_name}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Message: {message}</p>
         
            </div>
    );
}

export {MessageCard};