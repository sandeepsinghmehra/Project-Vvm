import { useState } from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import {TiDelete} from 'react-icons/ti';
import songArr from './Dummydb';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarOpenClick = () => {
        console.log('sidebarClicked');
        setSidebarOpen(true);
    }
    const sidebarCloseClick = () => {
        console.log('sidebarClose');
        setSidebarOpen(false);
    }
    return (
        <>
           <div>
               {!sidebarOpen ?<div className="sidebar" onClick={sidebarOpenClick}>
                   <hr className="barline" /> 
                   <hr className="barline" /> 
                   <hr className="barline" />
                </div> : <div className="sidebar" onClick={sidebarCloseClick}>
                    <TiDelete style={{color:"white", width:"2em", height:"2em"}} />
                    </div>}
                {!sidebarOpen ?<div className="nameBox">
                    {songArr[0].name}
                </div>: <div className="centerMenu">
                    <div className="centerMenuDiv">{songArr[0].name}</div>
                    <div className="centerMenuDiv">{songArr[1].name}</div>
                    <div className="centerMenuDiv">{songArr[2].name}</div>
                    </div>}
                {sidebarOpen ? <>
                <p className="artists"><Link to={'/about'}>About</Link></p>
                <p className="socialIcon">Facebook | Twitter</p></>: 
                <>
                <p className="previous">Previous</p>
                <p className="next">Next</p>
                <p className="artists"><Link to={'/artists'}>Artists</Link></p></>}
            </div> 
           
        </>
    )
}

export default Sidebar;
