import React from 'react';
import './RightSidebar.css'; 
const SideDashboard = () => {
    return (
        <aside className="side-dashboard">
            <h2>School students</h2>
            <ul>
                <li><a href="#availablescholorship">Available scholorship</a></li>
                <li><a href="#schemesonnyp">schemes on NYP</a></li>
                <li><a href="eligible">Eligible level</a></li>
                <li><a href="#scholarship-opportunities">Scholarship Opportunities</a></li>
                <li><a href="#providers">Scholorship providers</a></li>
            </ul>
            <h3>College Students</h3>
            <ul>
                <li><a href="#availablescholor">Available scholorship</a></li>
                <li><a href="#eligiblelevel">Eligible level</a></li>
                <li><a href="#scholoropr">Scholarship Opportunities</a></li>
                <li><a href="#interns">Free interns</a></li>
            </ul>
            <h3>Resources</h3>
            <ul>
                <li><a href="#scholarship-tips">Scholarship Tips</a></li>
                <li><a href="#webinars">Webinars/Workshops</a></li>
                <li><a href="#contact-support">Contact Support</a></li>
            </ul>
           
        </aside>
    );
}

export default SideDashboard;

