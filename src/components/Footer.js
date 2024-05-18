import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className="footer-icon-img" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
          <a  target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/shashankr8/"><img src={navIcon1} alt="" /></a>
          <a  target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/shashank.salian.79"><img src={navIcon2} alt="" /></a>
          <a  target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/_shashank.salian_/"><img src={navIcon3} alt="" /></a>
        </div>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
