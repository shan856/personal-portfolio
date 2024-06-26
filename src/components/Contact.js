import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [contactImage, setContactImage] = useState("https://raw.githubusercontent.com/shan856/personal-portfolio/master/uploads/contact-2.png");
  const [fade, setFade] = useState(false); // State to trigger fade effect

  const errorImages = [
    "https://raw.githubusercontent.com/shan856/personal-portfolio/master/uploads/contact-error-8.png",
    "https://raw.githubusercontent.com/shan856/personal-portfolio/master/uploads/contact-error-7.png"
  ];

  const getRandomErrorImage = () => {
    const randomIndex = Math.floor(Math.random() * errorImages.length);
    return errorImages[randomIndex];
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData();
    formData.append("firstName", formDetails.firstName);
    formData.append("lastName", formDetails.lastName);  
    formData.append("email", formDetails.email);
    formData.append("phone", formDetails.phone);
    formData.append("message", formDetails.message);
    formData.append("access_key", "0efd2f84-5712-494b-bc00-60ad49c532f3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (result.success) {
        setStatus({ success: true, message: 'Message sent successfully' });
        triggerFade("https://raw.githubusercontent.com/shan856/personal-portfolio/master/uploads/contact-1.png");
      } else {
        setStatus({ success: false, message: result.message });
        triggerFade(getRandomErrorImage());
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      triggerFade(getRandomErrorImage());
    }
  };

  const triggerFade = (newImage) => {
    setFade(true);
    setTimeout(() => {
      setContactImage(newImage);
      setFade(false);
    }, 500); // This timeout should match the CSS transition duration
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={`contact-image ${isVisible ? "animate__animated animate__zoomIn" : ""} ${fade ? "fade" : ""}`}
                  src={contactImage}
                  alt="Contact Us"
                />
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
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required ></textarea>
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
