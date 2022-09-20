import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Naufal</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning.</p>
          <a href="https://www.linkedin.com/in/naufal-yusran/" target="blank">
            <LinkedInIcon />
          </a>
          <a href="mailto:naufalyoesran@gmail.com" target="blank">
            <EmailIcon />

          </a>
          <a href="https://www.github.com/yoesran" target="blank">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
