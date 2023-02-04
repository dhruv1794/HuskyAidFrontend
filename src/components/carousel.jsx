import  { useState, useEffect } from "react";
import './styles/carousel.css'
import {CarouselCard} from './index';




const Carousel = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(items.length);

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setCurrentIndex(0);
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        else {
            setCurrentIndex(items.length - 1);
        }
    }

    // Set the length to match current children from props
    useEffect(() => {
        setLength(items.length)
    }, [items])
    const listItems = items.map((item) => <CarouselCard key={item.id} info={item}/>);
    return(
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper">
                <button className="left-arrow" onClick={prev}>&lt;</button>
                <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 105}%)` }}>
                        {listItems}
                    </div>
                <button className="right-arrow" onClick={next}>&gt;</button>
                </div>
            </div>
        </div>
    )
}

export  {Carousel};

