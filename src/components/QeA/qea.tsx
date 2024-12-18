"use client";

import "./qea.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user1 from "../../assets/user.png";
import user2 from "../../assets/user.png";
import user3 from "../../assets/user.png";
import user4 from "../../assets/user.png";
import { useRef, useState } from "react";

const QeA: React.FC = () => {
  const slider = useRef<HTMLUListElement>(null);
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    if (tx > -50) {
      const newTx = tx - 25;
      setTx(newTx);
      if (slider.current) {
        slider.current.style.transform = `translateX(${newTx}%)`;
      }
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      if (slider.current) {
        slider.current.style.transform = `translateX(${newTx}%)`;
      }
    }
  };

  return (
    <div className="qea">
      <div className="qea-title">Q&A</div>
      <div className="questions">
        <h1>
          A little more about me{" "}
          <i className="bx bxs-conversation" />
        </h1>
      </div>

      <img
        src={next_icon.src}
        alt="Next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon.src}
        alt="Back"
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1.src} alt="John Philippi" />
                <div>
                  <h3>User</h3>
                </div>
              </div>
              <div className="h1">
                <h4>Where do you live, and what do you study?</h4>
              </div>
              <p>
                I live in Brazil, Passos, MG, and I study Information Systems at
                the State University of Minas Gerais.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2.src} alt="Jaguar" />
                <div>
                  <h3>User</h3>
                </div>
              </div>
              <div className="h1">
                <h4>Why Mocs?</h4>
              </div>
              <p>
                M O C S is the combination of the initials of my full name, but
                I usually go by marowyck
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3.src} alt="Panda" />
                <div>
                  <h3>User</h3>
                </div>
              </div>
              <div className="h1">
                <h4>What are your most used technologies?</h4>
              </div>
              <p>
                For frontend: React (Next.js) + TypeScript, for backend: Java as
                the main language and Go. Additionally, I use MySQL and MongoDB
                databases.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4.src} alt="Tatu" />
                <div>
                  <h3>User</h3>
                </div>
              </div>
              <div className="h1">
                <h4>How can I learn more about what you study?</h4>
              </div>
              <p>
                You can access my projects and my published articles; all of
                them have a little bit of what I explore within this world.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QeA;
