import React from 'react'
import logo from "../assets/Li.png"
import './Footer.css'

const Footer = () => {
    return (
        <div>

            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            {/* <h4></h4> */}
                            <img src={logo} alt="" style={{ width: '60%', height: "10%" }} />

                            {/* <ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul> */}
                        </div>
                        <div class="footer-col">
                            <h4>General</h4>
                            <ul>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Carrers</a></li>
                                <li><a href="#">Developers</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>General</h4>
                            <ul>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Carrers</a></li>
                                <li><a href="#">Developers</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Business Solutions</h4>
                            <ul>
                                <li><a href="#">Talent



                                </a></li>
                                <li><a href="#">Marketing


                                </a></li>
                                <li><a href="#">Sales</a></li>
                                <li><a href="#">Learning</a></li>

                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Directories








</h4>
                            <ul>
                                <li><a href="#">Members



                                </a></li>
                                <li><a href="#">Jobs


                                </a></li>
                                <li><a href="#">Companies</a></li>
                                <li><a href="#">Featured</a></li>
                                <li><a href="#">Learning</a></li>
                                <li><a href="#">Schools</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Interview Prep</a></li>
                                <li><a href="#">Products</a></li>

                            </ul>
                        </div>
                        {/* <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
            <div className="foot">
            <img src={logo} alt="" style={{ width: '100px', height: "20px" }} />
            <p>© 2020</p>
            <p>About</p>
            <p>Accessibility</p>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Brand Policy</p>
            <p>Guest Control</p>
            <p>Community guidelines</p>
            <p>Language</p>
            </div>
        </div>
        //     </div>
        // </div >
    )
}

export default Footer