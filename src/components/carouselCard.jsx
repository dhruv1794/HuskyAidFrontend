

function CarouselCard({info}) {

    return ( 
        <div className="what-i-do-card">
            <div className="logo-wrapper">
                <img src={info.img} alt="Idea "></img>

            </div>
            <div className="header">
                {info.header}
            </div>
            <div className='content'>
            {info.content}
            </div>
        </div>
    )
}

export  {CarouselCard};