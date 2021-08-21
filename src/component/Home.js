import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animations } from 'react-animation';
import './Home.css';
import Loader from "./Loader";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };
    const load = async (milliseconds = 10000) => {
        await sleep(milliseconds);
        setLoading(false);
      };

    useEffect(()=>{
        load(10000);
    });
    return (
        <>
        {loading ?
            <Loader /> :
            <div className="container" style={{background: '#11052C', height:'100vh'}}>
                <div className="mainContainer" style={{animation: animations.fadeIn, animationDuration: '1000ms'}}>
                    <div className="logoName">4</div>
                    <div className="logoName">0</div>
                    <div className="logoName">0</div>
                    <div className="logoName">7</div>
                    <div className="logoName">5</div>
                </div>
                <div className="button">
                        <span className="buttonJourney" style={{animation: animations.bounceIn }}>
                            <Link to={'/detail'}>Start your journey</Link>
                        </span>
                </div>
            </div>}
        </>
    )
}

export default Home
