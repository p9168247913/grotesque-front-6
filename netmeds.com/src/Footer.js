import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="copyright">
                <center>
                    <h5><b>&copy;2022 Tejas.All Rights Reserved </b></h5>
                </center>
            </div>
            <div className="socials">
                <h5><b>Follow us on</b></h5>
                <Link href="https://www.facebook.com/tejas.b.patil.12" target="_blank"><img src="https://i.ibb.co/DfyFPkr/facebook.jpg"
                    className="socials1" alt="Instagram"/></Link>
                <Link href="https://www.instagram.com/innocent_boy_tp/" target="_blank"><img src="https://i.ibb.co/zPWFswT/insta.jpg"
                    className="socials1" alt="Facebook"/></Link>
                <Link href="https://github.com/tp-the-developer" target="_blank"><img src="https://i.ibb.co/Mg5nWYL/githb.jpg"
                    className="socials1" alt="Github"/></Link>
                <Link href="https://www.linkedin.com/in/tejas-patil-623430218/" target="_blank"><img
                    src="https://i.ibb.co/yYtWMKB/linkedin.jpg" className="socials1" alt="LinkedIn"/></Link>
                <Link href="https://mobile.twitter.com/TejasPa98739034" target="_blank"><img src="https://i.ibb.co/0t1CFbR/twitter1.jpg"
                    className="socials1" alt="Twitter"/></Link>
            </div>
            <div className="featuredFooter">
                <h5><b>Featured Category</b></h5>
                <Link to={'/'}>Covid Essentials</Link>
                <Link to={'/'}>Healthcare Products</Link>
                <Link to={'/'}>Nutrition Drinks</Link>
                <Link to={'/'}>Personal Care</Link>
                <Link to={'/'}>Ayurvedic Care</Link>
                <Link to={'/'}>Skin Care</Link>
                <Link to={'/'}>Sexual Wellness</Link>
                <Link to={'/'}>Home Care</Link>
            </div>
            <div className="services">
                <h5><b>Our Services</b></h5>
                <Link to={'/'} >Order Medicines</Link><br/>
                    <Link to={'/'}>Healthcare Products</Link>
            </div>
            {/* <div className="partner">
                <h5><b>Our Payments Partner</b></h5>
                <img src="images/footer/amazon.svg" alt="Amazon Pay"/>
                <img src="images/footer/gpay.svg" alt="Google Pay"/>
                <img src="images/footer/mastercard.svg" alt="MasterCard"/>
                <img src="images/footer/mobikwik.svg" alt="Mobikwik"/>
                <img src="images/footer/paytm.svg" alt="Paytm"/>
                <img src="images/footer/phonepay.svg" alt="PhonePay"/>
                <img src="images/footer/rupay.svg" alt="Rupay"/>
                <img src="images/footer/visa.svg" alt="Visa"/>
            </div> */}
        </>
)}

export default Footer;