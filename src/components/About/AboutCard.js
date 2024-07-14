import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zach Barnes </span>
            from <span className="purple"> Denver, Colorado.</span>
            <br />
            I am currently employed as a software developer at Vistar.
            <br />
            I have a passion for software and can't imagine doing anything else.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Weight Lifting 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Piloting 🛩️
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🧳
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Most good programmers do programming not because they expect to get
            paid or get adulation by the public, but because it is fun to
            program."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
