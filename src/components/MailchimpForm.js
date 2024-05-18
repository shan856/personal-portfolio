import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ShashankResume from '../assets/files/Shashank_R_resume.pdf';

export const MailchimpForm = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the PDF file path
    link.href = ShashankResume;
    // Set the download attribute with a filename
    link.download = 'Shashank_R_resume.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <button className="rs-download" onClick={handleDownload}>
                Download CV
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </Col>
  );
};
