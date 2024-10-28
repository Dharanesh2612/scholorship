import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="schoollogo.jpg" alt="Scholarship Logo" />
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#scholarships">Scholarships</a></li>
                    <li><a href="#media">Media</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#helpusS">HelpuSs</a></li>
                </ul>
            </nav>
            <div className="header-buttons">
                <button className="free-user-button">Register</button>
                <button className="login-button">Login</button>
            </div>
           
        </header>
    );
}

export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="logo">
//                 <img src="schoollogo.jpg" alt="Scholarship Logo" />
//             </div>
//             <nav className="nav-links">
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About Us</a></li>
//                     <li><a href="#scholarships">Scholarships</a></li>
//                     <li><a href="#media">Media</a></li>
//                     <li><a href="#faq">FAQ</a></li>
//                     <li><a href="#helpusS">HelpuSs</a></li>
//                 </ul>
//             </nav>
//             <div className="header-buttons">
//                 <button className="free-user-button">Register</button>
//                 <Link to="/login">
//                     <button className="login-button">Login</button>
//                 </Link>
//             </div>
//         </header>
//     );
// }

// export default Header;
