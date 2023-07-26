import React, { useState } from 'react';
import './FB.css';

function FB() {

      const [formData, setFormData] = useState({
        name: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    // console.log(name+message+value);
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch('/send-feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((result) => {
            alert("thank you for that");
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

////////////
return (
    <div className="App">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          
        />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );





////////////

}export default FB;



