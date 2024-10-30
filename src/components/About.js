import React from 'react';
import background from '../assests/images/bg.jpg';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <div
                className="container-fluid py-5 bg-cover"
                style={{
                    background: `url(${background}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="row pt-5 mt-5">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="fw-bold text-white display-5">ABOUT US</div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="text-warning gap-md-5">For Further Queries</div>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-6">
                        <div className="padding30 mb30" style={{ backgroundColor: '#eee' }}>
                            <div className="box-icon-simple left">
                                <i className="icon_comment_alt wow bounceIn" data-wow-delay=".5s"></i>
                                <div className="text">
                                    <h3>Our Vision</h3>
                                    <ul>
                                        <li>To provide engineering solutions that satisfy the needs of our clients.</li>
                                        <li>To improve the quality of life of our people.</li>
                                        <li>To be a leading consulting architecture and engineering company.</li>
                                        <li>To be the consulting architecture, engineering, and project management company of choice for employers.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="padding30 mb30" style={{ backgroundColor: '#eee' }}>
                            <div className="box-icon-simple left">
                                <i className="icon_clock_alt wow bounceIn" data-wow-delay=".5s"></i>
                                <div className="text">
                                    <h3>Our Mission</h3>
                                    <p>
                                        To provide the highest innovative and quality consulting architectural, engineering,
                                        and project management services that ensure client satisfaction, long-term benefits to
                                        beneficiaries and clients, upliftment of communities, maximize equity and skills transfer
                                        by adding value through the employment and application of world-class resources, practices,
                                        and technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <figure className="pic-hover hover-scale mb30">
                            <span className="center-xy">
                                <a className="popup-youtube" href="https://www.youtube.com/watch?v=LE7MCx6MQgs">
                                    <i className="fa fa-play btn-action btn-play btn-action-hide"></i>
                                </a>
                            </span>
                            <span className="bg-overlay" style={{ width: '848px', height: '339px' }}></span>
                        </figure>
                    </div>

                    <div className="col-md-6">
                        <figure className="pic-hover hover-scale mb20">
                            <span className="center-xy">
                                <a className="image-popup" href="images/misc/pic_6.jpg">
                                    <i className="fa fa-image btn-action btn-action-hide"></i>
                                </a>
                            </span>
                            <span className="bg-overlay" style={{ width: '409px', height: '249px' }}></span>
                        </figure>
                        <h3>Planning</h3>
                        <p>
                            For the successful execution of a project, effective planning is essential. Those involved with
                            the design and execution of the infrastructure in question must consider zoning requirements.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h3>Constructing</h3>
                        <p>
                            An era where we want to bring the best out of your idea, a moment where we care for our clients
                            by bringing their dream designs to life and actualizing their visions.
                        </p>
                        <figure className="pic-hover hover-scale mt20">
                            <span className="center-xy">
                                <a className="image-popup" href="images/misc/pic_7.jpg">
                                    <i className="fa fa-image btn-action btn-action-hide"></i>
                                </a>
                            </span>
                            <span className="bg-overlay" style={{ width: '409px', height: '249px' }}></span>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
