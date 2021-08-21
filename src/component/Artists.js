import React from 'react'
import Logo from '../images/40075.jpg';
import CoverImage from '../images/cover-image.png';
import {FaSpotify} from 'react-icons/fa';
const Artists = () => {
    return (
        <>
        <div className="about">
          <img src={Logo} alt='Logo' className="logoImage" />
              <div className="leftAbout">
                  <div className="cardAbout">  
                  
                  </div>      
              </div>
              <div className="rightAbout">
                      <img className="image" src={CoverImage} alt='avtar' />
                  <div className="tableDiv" style={{marginTop: '35vh'}}>
                      <p><FaSpotify /> DISCOVER ON SPOTIFY</p>
                      <h1 className="heading">Songhoy Blues</h1>
                      <p className="p">Formed in 2012 at university in Bamako, Mali by Oumar Touré,<br />
                            Aliou Touré, and Garba Touré, Songhoy Blues was born out of the<br />
                            frustration of the unrest that was happening in the north of<br />
                            Mali, which had forced them to seek refuge in the south. <br />
                            Drafting in drummer Nathanael Dembele, the group became a<br />
                            regular fixture on the Bamako live music scene, until their<br />
                            unique brand of traditional and modern songwriting -- a style<br />
                            similar to that led by the likes of fellow countrymen Ali Farka<br />
                            Touré and Baba Salah -- was picked up by French manager<br />
                            Marc-Antoine Moreau on behalf of the label Africa Express.</p>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default Artists;
