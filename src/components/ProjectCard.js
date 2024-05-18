import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,projUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <a target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'inherit', color: 'inherit', fontWeight: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }} href={projUrl}>
        <h4>{title}</h4>
      </a>      
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
