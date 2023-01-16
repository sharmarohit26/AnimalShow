import { useState } from 'react';
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import heart from './images/heart.svg';
import horse from './images/horse.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}){
    const [clicks, setClick] = useState(0);

    const handleClick = () => {        
        setClick(clicks + 1);
    };

    return( 
        <li onClick={handleClick}>
            <img alt="animals" src={svgMap[type]} className="animal" />
            <img alt='heart' src={heart} style={{width:10 + 10 * clicks}} className="heart" />
        </li>
    )
}

export default AnimalShow;