import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen } from "react-icons/fa";
import Countdown from 'react-countdown';



const ComingSoon = () => {

    const Completionist = () => <span>LeBonBerger Bientôt Disponible pour votre édification</span>;

    const SetCountdownTime = "2023-02-06T17:00:00";

    const CountDownRender = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />; 
        } else {
          return (
              <div className="countdown">
                  <div className="countdown-section">
                    <span className="countdown-number">{days}</span>
                    <span className="countdown-unit">Jours</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{hours}</span>
                    <span className="countdown-unit">Heures</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{minutes}</span>
                    <span className="countdown-unit">minutes</span>
                  </div>
                  <div className="countdown-section">
                    <span className="countdown-number">{seconds}</span>
                    <span className="countdown-unit">secondes</span>
                  </div>
              </div>
          )
        }
      }


    return (
        <>
        <SEO title="Bientôt Disponible" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <div className="coming-soon-area onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="site-logo">
                                <Link to={process.env.PUBLIC_URL + "/"} className="logo-light"><img src={process.env.PUBLIC_URL + "/images/logo3.png"} alt="Logo" /></Link>
                                <Link to={process.env.PUBLIC_URL + "/"} className="logo-dark"><img src={process.env.PUBLIC_URL + "/images/logo-3.png"} alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="content">
                            <h2 className="title">LeBonBerger Bientôt!</h2>
                            <p>LeBonBerger sera bientôt Disponible pour un meilleur suivi des âmes gagnées au Christ.</p>
                            <Countdown date={SetCountdownTime} zeroPadTime={3} renderer={CountDownRender}></Countdown>
                            <form action="mailto:hegeldirkk@gmail.com" method="post" enctype="text/plain">
                                <div className="input-group">
                                    <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                    <input type="email" className="form-control" placeholder="Entrer votre adresse email" />
                                    <button className="subscribe-btn" type="submit">Contactez nous</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumbnail">
                                <img src={process.env.PUBLIC_URL + "/images/others/coming-lebon.png"} alt="Coming Soon" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-2">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-28.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ComingSoon;