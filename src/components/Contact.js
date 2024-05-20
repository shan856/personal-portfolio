// Contact.js

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  // Initial form state
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  // State hooks for form details, button text, and status message
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // Array of contact image URLs
  const contactImages = [
    "https://raw.githubusercontent.com/shan856/personal-portfolio/master/uploads/contact-1.png",
    "https://raw.githubusercontent.com/shan856/personal-portfolio/master/uploads/contact-2.png",
    "https://raw.githubusercontent.com/shan856/personal-portfolio/master/uploads/contact-3.png"
  ];

  // State hook for randomly chosen contact image URL
  const [randomContactImage, setRandomContactImage] = useState('');

  // State hook for randomly chosen background class
  const [randomBackgroundClass, setRandomBackgroundClass] = useState('');

  // Function to pick a random contact image URL
  const getRandomContactImage = () => {
    const randomIndex = Math.floor(Math.random() * contactImages.length);
    return contactImages[randomIndex];
  };

  // Function to pick a random background class
  const getRandomBackgroundClass = () => {
    const randomIndex = Math.random() < 0.5 ? 1 : 2;
    return `bg-${randomIndex}`;
  };

  // Set random contact image URL and background class on component mount and when contactImages changes
  useEffect(() => {
    setRandomContactImage(getRandomContactImage());
    setRandomBackgroundClass(getRandomBackgroundClass());
  }, [contactImages]); // Re-run effect when contactImages changes

  // Handle form updates
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Form submission logic
    // ...

    // Reset form and status after submission
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: 'Message sent successfully' }); // For demo purposes
  };

  return (
    <section className={`contact ${randomBackgroundClass}`} id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={randomContactImage} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
