import { useState, useEffect } from 'react';
import { animations } from 'react-animation'
import './Loader.css';
import Logo from '../images/40075.jpg';
import ProgressBar from './ProgressBar';
const Loader = () => {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=>{
            setCompleted(oldValue => {
                const newValue = oldValue + 10;
                if(newValue === 100){
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 1000);
        
      }, []);
    return (
        <>
        <div className="LoaderContainer" style={{animation: animations.fadeIn, animationDuration: '1000ms'}}>
            <div className="logo">
                    <img src={Logo} alt='Logo' />
            </div>
                <div className="card"  style={{animation: animations.fadeInUp, animationDuration: '4000ms' }}>
                    <div className="h1">
                        An immersive journey to
                    </div>
                    <div className="h1"> 
                        discover musical artists
                    </div>
                    <div className="h1">
                        from all over the world.
                    </div>
            </div>  
            <ProgressBar completed={completed} />
            </div>
        </>
    )
}

export default Loader;
