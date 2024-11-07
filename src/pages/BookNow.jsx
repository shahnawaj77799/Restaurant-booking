import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setInput(values => ({ ...values, [name]: value }));
      console.log(input);
    };

    const handleSubmit = (e) => {
      e.preventDefault();  // Prevents the default form submit behavior

      let api = "http://localhost:40001/users";
      axios.post(api, input).then((res) => {
        console.log(res);
        console.log("Data successfully saved!");
        toast.success("Data Successfully saved!!!");
        setInput({});
      })
      .catch((err) => {
        alert(err.response.data);
      });
    };

    return (
        <>
        <section id="booking">
            <h2>Book Your Restaurant</h2>
            <form id="bookingForm" onSubmit={handleSubmit} className="booking-form">
                <div className="form-container">
                    <div className="form-section">
                        <h5> Information</h5>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" onChange={handleInput} required />

                        <label htmlFor="mobile">Mobile Number:</label>
                        <input type="tel" id="mobile" name="mobile" onChange={handleInput} required />

                        <div className="form-section">
                            <h5>Book Your Favorite Place</h5>
                            <label htmlFor="restaurantPlace">Restaurant Place</label>
                            <select id="restaurantPlace" name="restaurantPlace" onChange={handleInput} required>
                                <option value="">Select Place</option>
                                <option value="Delhi">1 :-  Delhi</option>
                                <option value="Bhopal">2 :-  Bhopal</option>
                                <option value="Indore">3 :-  Indore</option>
                                <option value="Mumbai Beach">4 :-  Mumbai Beach</option>
                                <option value="Gurgaon">5 :-  Gurgaon</option>
                                <option value="Noida">6 :-  Noida</option>
                                <option value="Goa">7 :-  Goa</option>
                            </select>
     
                        </div>

                        <div className="form-section">
                        <h5>Booking Details</h5>
                        <label htmlFor="tableType">Table Type:</label>
                        <select id="tableType" name="tableType" onChange={handleInput} required>
                            <option value="">Select Table Type</option>
                            <option value="single">Single - ₹2000</option>
                            <option value="double">Double - ₹3500</option>
                            <option value="combo">Combo - ₹4500</option>
                            <option value="familyPack">Family Pack - ₹8000</option>
                        </select>

                        <div className="form-section">
                            <h5>Book Your Table Number</h5>
                            <label htmlFor="Tablenumber">Restaurant Table</label>
                            <select id="Tablenumber" name="Tablenumber" onChange={handleInput} required>
                                <option value="">Select Table Number</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
     
                        </div>
                    </div>

                   

                        <label htmlFor="checkIn">Check-In:</label>
                        <input type="date" id="checkIn" name="checkIn" onChange={handleInput} required />

                        <label htmlFor="checkOut">Check-Out:</label>
                        <input type="date" id="checkOut" name="checkOut" onChange={handleInput} required />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="3" onChange={handleInput} placeholder="Any additional requests..."></textarea>
                    </div>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </section>
        <ToastContainer />
        </>
    );
}

export default BookNow;





