import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather App",
      description: "This Weather App utilizes the OpenWeatherMap API to deliver real-time weather updates, enabling users to check current conditions and forecasts for any location globally.",
      imgUrl: projImg5,
      projUrl:"_blank",
    },
    {
      title: "Daily News",
      description: "This app fetches daily news using the Google News API, providing a range of headlines and articles from different sources for users to stay updated with current events.",
      imgUrl: projImg2,
      projUrl:"https://daily-news-project.vercel.app/",


    },
    {
      title: "Gemini AI Clone",
      description: "Built with the Google AI API, this project aims to mimic the functionalities of Gemini AI, offering intelligent responses and advanced AI capabilities in user interactions.",
      imgUrl: projImg3,
      projUrl:"https://gemini-clone-project.vercel.app/",
    },
    {
      title: "YouTube Clone",
      description: "Developed with Rapid API, this project replicates a YouTube clone, allowing users to browse, search, and watch videos with a familiar interface and leveraging Rapid API for seamless integration of video content and functionalities.",
      imgUrl: projImg1,
      projUrl:"https://shan-youtube-clone.vercel.app/",

    },
    {
      title: "Personal Portfolio",
      description: "This is my personal portfolio, highlighting my skills, projects, and achievements. It's a professional showcase designed for potential employers or clients to explore my expertise and experience",
      imgUrl: projImg4,
      projUrl:"_blank",

    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "",
      projUrl:"_blank",

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My Projects demonstrate my ability to create user-friendly and efficient web applications. They highlight my skills in front-end development and back-end integration, with a commitment to high-quality code and continuous improvement.</p>
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
