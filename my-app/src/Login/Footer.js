import React from 'react';
import './Footer.css'

const Footer = () => {
  return (

        <footer className="footer">
            <div className="footer-box">
                <h3>Contact Us</h3>
                <p>Email: info@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="footer-box">
                <h3>Privacy Policy</h3>
                <p><a href="#privacy-policy">View Policy</a></p>
            </div>
            <div className="footer-box">
                <h3>Sponsor</h3>
                <p>Interested in sponsoring?</p>
                <p><a href="#sponsor">Learn More</a></p>
            </div>
            <div className="footer-box">
                <h3>Follow Us</h3>
                <p><a href="#facebook">Facebook</a></p>
                <p><a href="#twitter">Twitter</a></p>
                <p><a href="#instagram">Instagram</a></p>
            </div>
        </footer>
    );
};



export default Footer