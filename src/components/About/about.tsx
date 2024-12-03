import React from "react";
import "../About/about.css";

const AboutMe = () => {
  return (
    <div className="mom">
      <div className="title">
        <h1>LEARN MORE ABOUT ME</h1>
      </div>
      <div className="about-me">
        <div className="text">
          <h3>hey, im maria olivia aka marowyck :p</h3>
          <h3>
            im all about <span className="resume">fullstack development</span>, but my heart belongs to
            frontend.
          </h3>
          <h3>
            i have a blast learning the technologies i use, and <span className="resume">UX/UI</span> is totally
            my jam
          </h3>
          <h3>
            <span className="resume">check out my curriculum</span> while you are at it
          </h3>
          <button className="cssbuttons-io-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
              ></path>
            </svg>
            <span>Curriculum</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
