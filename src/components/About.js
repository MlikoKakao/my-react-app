import { useState } from "react";

function About() {
  const [showEducation, setShowEducation] = useState(false);
  const [showLine, setShowLine] = useState(false);
  function handleClick() {
    setShowLine(!showLine);

    setTimeout(() => {
      setShowEducation(!showEducation);
    }, 300);
  }

  return (
    <section>
      <h2>About Me</h2>
      <p>This is the about section.</p>
      <div
        className="specifyButton"
        style={{ position: "relative", display: "inline-block" }}
      >
        <h3 onClick={handleClick}>Education</h3>

        {showLine && (
          <div className="loading-line">
            <p>─────────────</p>
          </div>
        )}
        {showEducation && (
          <div className="education-info">
            <p>Generic high school</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
