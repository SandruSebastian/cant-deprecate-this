import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import githubIcon from '../../resources/icons/github-logo.svg';
import linkedinIcon from '../../resources/icons/linkedin-logo.svg';
export default function Footer() {
    return (
        <footer style={{marginTop: 48}} className="footer_area section_padding_130_0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-footer-widget section_padding_0_130">
                            <div className="footer-logo mb-3" />
                            <p>sandrusebastian.com</p>
                            <div className="copywrite-text mb-3">
                                <p className="mb-0">© 2022 Sandru Sebastian. All rights reserved</p>
                            </div>
                            <div className="footer_social_area">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/sebastiansandru"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Linkedin"
                                >
                                    <i className="fa fa-pinterest" />
                                    <img alt="linkedin" src={linkedinIcon} />
                                </a>

                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/SandruSebastian"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Github"
                                >
                                    <i className="fa fa-facebook" />
                                    <img alt="github" src={githubIcon} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg">
                        <div className="single-footer-widget section_padding_0_130">
                            <h5 className="widget-title">Links</h5>
                            <div className="footer_menu">
                                <ul>
                                    <li>
                                        <a style={{color: 'black'}} href="/">Home</a>
                                    </li>
                                    <li>
                                        <a style={{color: 'black'}} href="projects">Projects</a>
                                    </li>
                                    <li>
                                        <a style={{color: 'black'}} href="freelance">Freelance</a>
                                    </li>
                                    <li>
                                        <a style={{color: 'black'}} href="contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg">
                        <div className="single-footer-widget section_padding_0_130">
                            <h5 className="widget-title">Contact</h5>
                            <div className="footer_menu">
                                <ul style={{wordBreak: 'break-all'}}>
                                    <li>
                                        <span role="img" aria-label="pin">
                                            📌
                                        </span>{' '}
                                        Timisoara, Romania
                                    </li>
                                    <li>
                                        <span role="img" aria-label="phone">
                                            📞
                                        </span>{' '}
                                        +(40) 722 586 392{' '}
                                    </li>
                                    <li>
                                        <span role="img" aria-label="email">
                                            📢
                                        </span>{' '}
                                        sandrusebastian1997@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
