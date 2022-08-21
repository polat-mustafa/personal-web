import React from "react";
import imageSrc from "../public/mustafa-polat.jfif";
import {
  BsFileEarmarkPdfFill,
  BsInstagram,
  BsGithub,
  BsMedium,
} from "react-icons/bs";
import Contact from "./Contact";

const LeftSide = () => {
  return (
    <div className="divLeft">
      <img
        alt="Mustafa Polat"
        src={imageSrc}
        id="personal"
        className="images"
      />

      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        I’m Energy Engineer but I was wondering about Web development. I started
        by reading the documentation of the technologies I like. I'm interested
        in JavaScript and its frameworks. (React.js, Node.js etc.) I going to
        starting write in Medium blog. I add comments to the Readme file on my
        GitHub profile, so I discovered that I love to write.
      </p>
      <div className="texts">You can reach me</div>
      <hr
        style={{
          width: "50%",
          border: "1px solid #ccc",
          margin: "1rem auto",
        }}
      />

      <div className="icon">
        <div className="icons">
          <a
            className="icon1"
            href="https://www.instagram.com/polatmustafa_"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </div>
        <div className="icons">
          <a
            className="icon1"
            href="https://www.github.com/polat-mustafa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            className="icon1"
            href="https://www.medium.com/@polat-mustafa"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <BsMedium />
          </a>
        </div>
      </div>
      <div className="download">
        <a
          className="pdf"
          href={require("../public/Mustafa_Polat.pdf")}
          download="Mustafa Polat CV"
        >
          <BsFileEarmarkPdfFill /> Download CV
        </a>
      </div>
      <Contact
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default LeftSide;
