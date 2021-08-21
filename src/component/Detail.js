import { useState } from 'react';
import './Detail.css';
import Sidebar from './Sidebar';
import Logo from '../images/40075.jpg';
import songArr from './Dummydb';

const Detail = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () =>{
        const audioEl = document.getElementsByClassName("audio-element")[0];
        setClick(true);
        audioEl.play();
    }
    return (
        <>
            <div className="detail" onClick={handleClick}> 
                <div className="detailLogo">
                    <img src={Logo} alt='Logo' />
                </div>
            {click ?<Sidebar />:
                <div>
                    <div className="detailCard">
                            <div className="detailName">Sahara</div>
                    </div>
                    <div className="detailBody">
                        <div>Welcome at the first stop of your trip.</div>
                        <div>Search the 3 songs hidden in each scene.</div>
                    </div>
                </div>
            }
                <audio className="audio-element">
                    <source src={songArr[4].song}></source>
                </audio>
            </div>
        </>
    )
}

export default Detail;
