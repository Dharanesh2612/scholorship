import React from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
  return (
    <div className="content-container">
      <div className="button-container">
        <button className="live-scholarship-button">Live Scholarships</button>
        <button className="always-open-button">Always Open</button>
        <button className="free-training-button">Free Training</button>
        <div className="search-box">
          <input type="text" placeholder="Search scholarships..." />
          <button type="submit">Search</button>
        </div>
      </div>

      {/* Bootstrap Card Group with Equal Height Cards */}
      <div className="row">
        {/* First Row of Cards */}
        <div className="col-md-4 d-flex">
          <div className="card flex-fill">
            <img className="card-img-top" src="image1.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">EDU BUSIII</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card flex-fill">
            <img className="card-img-top" src="image2.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">LOREUM SCHOO</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card flex-fill">
            <img className="card-img-top" src="image3.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">CP LITE</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="row mt-3"> {/* Add margin-top for spacing */}
        <div className="col-md-4 d-flex">
          <div className="card flex-fill">
            <img className="card-img-top" src="image4.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Medico scholo</h5>
              <p className="card-text">This is another card with supporting text below as a natural lead-in to additional content.</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card flex-fill">
            <img className="card-img-top" src="image5.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">NEe scholo</h5>
              <p className="card-text">This card has some different supporting text to distinguish it from others.</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex">
          <div className="card flex-fill">
            <img className="card-img-top" src="image6.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">CRT F4</h5>
              <p className="card-text">This card features unique content to complement the collection.</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
