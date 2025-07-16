import { useState } from "react";

function About() {
  const [showEducation, setShowEducation] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showInt, setShowInt] = useState(false);
  function handleClickEdu() {
    setShowLine(!showLine);

    setTimeout(() => {
      setShowEducation(!showEducation);
    }, 200);
    setTimeout(() => {
      setShowLine((prev) => !prev);
    }, 350);
  }
  function handleClickInt() {
    setShowInt(!showInt);
  }
  return (
    <section>
      <h2>About Me</h2>
      <p>This is the about section.</p>
      <div
        className="specifyButton"
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <h3 onClick={handleClickEdu}>Education</h3>
        <br></br>
        <h3 onClick={handleClickInt}>Interests</h3>

        {showLine && (
          <div className="loading-line">
            <p>─────────────</p>
          </div>
        )}
        {showEducation && (
          <div className="education-info">
            <p>Generic high school</p>
            <div className="detail-edu">
              <p>Generic specialization</p>
            </div>
          </div>
        )}
        {showInt && (
          <div className="interest-info">
            <p>Generic interest</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
