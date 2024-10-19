import React from 'react'

function Footer() {
    return (
        <div>
            <div className='container-fluid bg-dark text-white mt-3'>
            <footer>
            <div className="container-fluid py-5 " style={{backgroundSize: "cover"}}>
                <div className="row" style={{backgroundSize: "cover"}}>
                    <div className="col-md-4" style={{backgroundSize: "cover"}}>
                        <img src='' className="logo-small" alt="Cresta Logo"/>
                    </div>

                    <div className="col-md-4" style={{backgroundSize: "cover"}}>
                        <div className="widget widget_recent_post" style={{backgroundSize: "cover"}}>
                            <h3>Latest News</h3>
                            <ul>
                                <li><p>5 Things That Take a Room from Good to Great</p></li>
                                <li><p>Functional and Stylish Wall-to-Wall Shelves</p></li>
                                <li><p>9 Unique and Unusual Ways to Display Your TV</p></li>
                                <li><p>The 5 Secrets to Pulling Off Simple, Minimal Design</p></li>
                                <li><p>How to Make a Huge Impact With Multiples</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4" style={{backgroundSize: "cover"}}>
                        <h3>Contact Us</h3>
                        <div className="widget widget-address" style={{backgroundSize: "cover"}}>
                            <address>
                                <div className='row my-2'>
                                    <div className='col'>                   
                                 <span>Othakalmandapam Post,Coimbatore -641032</span>
                                 </div>
                                </div>

                                <div className='row my-2'>
                                    <div className='col'>                   
                                    <span ><strong className='text-warning'>Phone:</strong>+254722534780</span>
                                 </div>
                                </div>
                                <div className='row my-2'>
                                    <div className='col'>                   
                                    <span><strong className='text-warning'>Email:</strong><a href="mailto:crestaa.007@gmail.com">crestaa.007@gmail.com</a></span>
                                    </div>
                                </div>
                                <div className='row my-2'>
                                    <div className='col'>                   
                                    <span><strong className='text-warning'>Web:</strong><a href="https://www.cresta.com">https://www.cresta.com</a></span>
                        
                                 </div>
                                </div>
                               

                                   </address>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subfooter" >
                <div className="container-fluid" style={{backgroundSize: "cover"}}>
                    <div className="row" style={{backgroundSize: "cover"}}>
                        <div className="col-md-6" style={{backgroundSize: "cover"}}>
                            © All Rights Reserved. Copyright Cresta 2024
                        </div>
                        <div className="col-md-6 text-right" style={{backgroundSize: "cover"}}>
                            <div className="social-icons" style={{backgroundSize: "cover"}}>
                                <a href="as"><i className="fa fa-facebook"></i></a>
                                <a href="as"><i className="fa fa-twitter"></i></a>
                                <a href="as"><i className="fa fa-instagram"></i></a>
                                <a href="as"><i className="fa fa-whatsapp"></i></a>
                                <a href="as"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </footer>
        </div>
        </div>
    )
}

export default Footer
