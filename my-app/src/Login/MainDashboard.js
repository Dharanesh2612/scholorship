import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./MainDashboard.css"
import RightSidebar from './RightSidebar';
import Content from './Content';

const MainDashboard = () => {
  return (
    <div>
      <Header />
      <p className="moving-paragraph">This is the main dashboard where you can find various resources and information.</p>
      <RightSidebar/>
      <Content/>
      {/* <Footer /> */}
    </div>
  );
}

export default MainDashboard;
