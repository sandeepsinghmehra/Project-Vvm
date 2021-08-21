import './About.css';
import CoverImage from '../images/cover-image.png';
import {FaSpotify} from 'react-icons/fa';
import {GiGargoyle} from 'react-icons/gi';

const About = () => {
    return (
        <>
          <div className="about">
              <div className="leftAbout">
                  <div><h1>An immersive</h1>
                       <h1> journey to discover</h1>
                       <h1> musical artists from </h1>
                       <h1>all over the world </h1>
                   </div>
                  <div>
                      <p>Because music doesn’t know any borders, we invite you </p>
                      <p>to a melodic journey in a foreign land, a world tour </p>
                      <p>of music carrying emotions, stories and energies.</p>
                      <p>Embark on a tour of discoveries to listen to artists</p>
                      <p>from all over the world, a trip of 40075 kilometers.</p>
                  </div>
                  <div className="aboutIcon">
                      <div><GiGargoyle /></div>
                      <div><FaSpotify />Spotify</div>
                  </div>
              </div>
              <div className="rightAbout">
                  <div>
                      <img className="image" src={CoverImage} alt='avtar' />
                  </div>
                  <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Artists</th>
                                <th>Design</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>01</b>  Songhoy Blues</td>
                                <td>Manon Jouet</td>
                            </tr>
                            <tr>
                                <td><b>02</b>  Tony Allen</td>
                                <td>Antoine Charrier</td>
                            </tr>
                            <tr>
                                <td><b>03</b>  Gily Yalo</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>04</b>Tinariwen</td>
                                <td>DEVELOPMENT</td>
                            </tr>
                            <tr>
                                <td><b>05</b>  Melanie de Biasio</td>
                                <td>Thomas Van Glabeke</td>
                            </tr>
                            <tr>
                                <td><b>06</b>  Melissa Laveaux</td>
                                <td>Ludovic Bouvinet</td>
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
