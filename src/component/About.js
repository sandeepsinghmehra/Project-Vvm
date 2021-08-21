import './About.css';
import CoverImage from '../images/cover-image.png';
import {FaSpotify} from 'react-icons/fa';
import {GiGargoyle} from 'react-icons/gi';
import Logo from '../images/40075.jpg';
const About = () => {
    return (
        <>
          <div className="about">
          <img src={Logo} alt='Logo' className="logoImage" />
              <div className="leftAbout">
                  <div className="cardAbout">   
                        <div className="h1">An immersive</div>
                        <div className="h1"> journey to discover</div>
                        <div className="h1"> musical artists from </div>
                        <div className="h1">all over the world </div>
                   </div>
                  <div className="cardAbout2">
                      <p className="p">Because music doesn’t know any borders, we invite you </p>
                      <p className="p">to a melodic journey in a foreign land, a world tour </p>
                      <p className="p">of music carrying emotions, stories and energies.</p>
                      <p className="p">Embark on a tour of discoveries to listen to artists</p>
                      <p className="p">from all over the world, a trip of 40075 kilometers.</p>
                  </div>
                  <div className="aboutIcon">
                      <div><GiGargoyle /></div>
                      <div><FaSpotify />Spotify</div>
                  </div>
              </div>
              <div className="rightAbout">
                      <img className="image" src={CoverImage} alt='avtar' />
                  <div className="tableDiv">
                    <table>
                        <thead>
                            <tr>
                                <th>Artists</th>
                                <th>Design</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>01</b>&emsp;Songhoy Blues</td>
                                <td>Manon Jouet  <span style={{color:'red'}}>&rarr;</span></td>
                            </tr>
                            <tr>
                                <td><b>02</b> &emsp; Tony Allen</td>
                                <td>Antoine Charrier  <span style={{color:'red'}}>&rarr;</span></td>
                            </tr>
                            <tr>
                                <td><b>03</b> &emsp; Gily Yalo</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>04</b> &emsp; Tinariwen</td>
                                <td>DEVELOPMENT</td>
                            </tr>
                            <tr>
                                <td><b>05</b> &emsp; Melanie de Biasio</td>
                                <td>Thomas Van Glabeke <span style={{color:'red'}}>&rarr;</span></td>
                            </tr>
                            <tr>
                                <td><b>06</b> &emsp; Melissa Laveaux</td>
                                <td>Ludovic Bouvinet  <span style={{color:'red'}}>&rarr;</span></td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default About
