import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import meetingminder from "../../Assets/Projects/meetingminder.png";
import snapcandidate from "../../Assets/Projects/snapcandidate.png";
import aioverview from "../../Assets/Projects/aioverview.png";
import resumelite from "../../Assets/Projects/resumelite.png";
import soccoin from "../../Assets/Projects/soccoin.png";
import presient from "../../Assets/Projects/prescient.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetingminder}
              isBlog={false}
              title="MeetingMinder"
              description="MeetingMinder will allow for more efficient meetings by establishing meeting topics in advance, determining each topics value, and then deciding on the order and allocating time to the topics based on their value. In addition, agenda will simplify meeting notes avoiding TLDR through action items for each topic."
              ghLink="https://github.com/SocexSolutions/agenda-v2"
              demoLink="https://www.meetingminder.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aioverview}
              isBlog={false}
              title="Hide AI Overviews"
              description="With over 12K active users and over 300 five star reviews, this browser extension is designed to enhance your browsing experience by removing AI-generated overviews from Google search results."
              ghLink="https://github.com/zbarnz/Google_AI_Overviews_Blocker"
              demoLink="https://chromewebstore.google.com/detail/hide-google-ai-overviews/neibhohkbmfjninidnaoacabkjonbahn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snapcandidate}
              isBlog={false}
              title="SnapCandidate"
              description="SnapCandidate will streamline your job search by utilizing AI to automate the application process. SnapCandidate will automatically craft and submit perfectly tailored applications across multiple platforms on your behalf, ensuring each submission is optimized for success."
              ghLink="https://github.com/zbarnz/PersonalRecruiter"
              // demoLink="https://snapcandidate.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soccoin}
              isBlog={false}
              title="Soccoin"
              description="SoCoin is a showcase of blockchain technology in the form of a crypto currency. This example includes steps such as signing transactions with private and public keys, proof-of-work, and mining rewards to incentivize mining blocks."
              ghLink="https://github.com/zbarnz/SoCoin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumelite}
              isBlog={false}
              title="Resume-lite"
              description="Resume-Lite is a lightweight library designed for generating resumes in HTML format. With zero dependencies, it ensures minimal overhead and maximum simplicity. By taking structured data as input, this library produces clean and professional resumes in HTML, making it an ideal tool for developers looking to create customizable resume templates with ease."
              ghLink="https://github.com/zbarnz/resume-lite"
              demoLink="https://www.npmjs.com/package/resume-lite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={presient}
              isBlog={false}
              title="Prescient"
              description="Prescient will revolutionize your daily habit tracking with an intuitive application designed for ease of use. By implementing a Chart.js wrapper, we ensure enhanced readability and usability of your progress data. Built on the NEST.JS backend framework, Prescient is scalable and thoroughly tested for reliability. Additionally, our GraphQL API efficiently manages data requests, eliminating overfetching issues and providing a seamless user experience."
              demoLink="https://www.prescient.thudson.dev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
