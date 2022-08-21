import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import image1 from "../assets/1.png";
import image2 from "../assets/dodo.png";
import image3 from "../assets/notes.png";
import image4 from "../assets/PomodoroTracker.png";
import image5 from "../assets/tictactoeapp.png";

function Cards() {
  const projects = [
    {
      id: 1,
      title: "E - Commerce",
      description:
        "An e-commerce website that allows you to add, delete, and edit your products.",
      image: image1,
      github: "",
      deployed: "",
    },
    {
      id: 2,
      title: "Notes",
      description:
        "A note taking app that allows you to add, delete, and edit your notes.",
      image: image3,
      github: "",
      deployed: "https://react-notesx.netlify.app",
    },
    {
      id: 3,
      title: "Pomodoro Tracker",
      description:
        "A pomodoro timer that allows you to start, stop, and reset your pomodoro timer.",
      image: image4,
      github: "",
      deployed: "",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      description:
        "A tic tac toe game that allows you to play against the computer.",
      image: image5,
      github: "",
      deployed: "https://tictactoeapp-react.netlify.app",
    },
    {
      id: 5,
      title: "Dodo",
      description:
        "A todo list app that allows you to add, delete, and edit your todo list.",
      image: image2,
      github: "",
      deployed: "",
    },
  ];

  return (
    <div className="cards">
      {projects.map((project) => (
        <Card key={project.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            {project.deployed ? (
              <Button variant="primary" href={project.deployed}>
                Deployed
              </Button>
            ) : null}
            <Button
              variant="primary"
              href={project.github}
              className="cardsButton"
            >
              Github
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
