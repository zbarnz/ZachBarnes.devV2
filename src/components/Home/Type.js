import React from "react";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

function Type() {
  const [shuffledStrings, setShuffledStrings] = useState([]);

  useEffect(() => {
    const strings = [
      "Software Developer",
      "SQL & NoSQL Database Pro",
      "API Developer",
      "Test Automation Advocate",
      "Full-Stack Engineer",
      "Problem Solver",
      "Open Source Contributor",
      "React & Next.js Specialist",
      "Project Management Expert",
      "SCRUM & Agile Enthusiast",
    ];

    // Fisher-Yates shuffle algorithm
    for (let i = strings.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [strings[i], strings[j]] = [strings[j], strings[i]];
    }

    setShuffledStrings(strings);
  }, []);

  return (
    <Typewriter
      options={{
        strings: shuffledStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
