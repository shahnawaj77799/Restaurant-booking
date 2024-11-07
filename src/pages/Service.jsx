import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/pic1.jpg'; 
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';


const Service = () => {
  return (

    <section id="services">
    <h2>Our Services</h2>
    <div className="services-container">

      <div className="service pic4">
        <img src={pic4} alt="Luxury Rooms" style={{ width: '100%', borderRadius: '5px' }} />
        <h3>Family Pack</h3>
        <p>Comfortable and spacious  for a luxurious .Space</p>
        <Link to="/booknow" className="cta newbtn">Book Now</Link>
      </div>
      <div className="service pic5">
        <img src={pic5} alt="Luxury Rooms" style={{ width: '100%', borderRadius: '5px' }} />
        <h3>Combo</h3>
        <p>Comfortable and spacious  for a luxurious .Space</p>
        <Link to="/booknow" className="cta newbtn">Book Now</Link>
      </div>
      <div className="service pic6">
        <img src={pic6} alt="Luxury Rooms" style={{ width: '100%', borderRadius: '5px' }} />
        <h3>Family Pack</h3>
        <p>Comfortable and spacious  for a luxurious .Space</p>
        <Link to="/booknow" className="cta newbtn">Book Now</Link>
      </div>
      </div>



    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service pic1">
          <img src={pic1} alt="Single Rooms" style={{ width: '120%', borderRadius: '8px' }} />
          <h3>Single Table</h3>
          <p>Comfortable and spacious  for a luxurious Space.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
        <div className="service pic2">
          <img src={pic2} alt="Double Rooms" style={{ width: '100%', borderRadius: '5px' }} />
          <h3>Double Table</h3>
          <p>Comfortable and spacious  for a luxurious Space.</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
        <div className="service pic3">
          <img src={pic3} alt="Luxury Rooms" style={{ width: '130%', borderRadius: '5px' }} />
          <h3>Combo</h3>
          <p>Comfortable and spacious  for a luxurious .Space</p>
          <Link to="/booknow" className="cta newbtn">Book Now</Link>
        </div>
        </div>

       
      <div className="services-container">
        <div className="service">
          <h3>Free Wi-Fi</h3>
          <p>High-speed internet access for all guests.</p>
        </div>
        <div className="service">
          <h3>24/7 Support</h3>
          <p>Our support team is available round the clock.</p>
        </div>
      </div>
    </section>
    </section>
   
  );
};

export default Service;
