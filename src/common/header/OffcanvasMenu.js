import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPhone, FaFax } from "react-icons/fa";


const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row ">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "/"}>Accueil</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/"}>Telecharger l'application</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/"}>Quelques palettes</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/contact"}>Nous Contacter</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="address">
                                    <span className="title">Information Contacte</span>
                                    <p>Koumassi, 07 BP Abj 07  <br /> CI, Abidjan</p>
                                </address>
                                <address className="address">
                                    <span className="title">Nous sommes disponibles 24h/24 et 7j/7. Appelle maintenant.</span>
                                    <a href="tel:0000000000" className="tel"><FaPhone /> +225 000000000</a>
                                    <a href="tel:0000000000" className="tel"><FaFax /> +225 000000000</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Retrouvez-nous ici</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a href="https://facebook.com/"><FaFacebookF /></a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/"><FaTwitter /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
