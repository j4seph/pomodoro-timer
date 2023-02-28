import { useEffect } from "react";
import close from "../../assets/close.svg";
import "./InfoPanel.css";

export default function InfoPanel({ setInfoPanel }) {
  function handleClose() {
    setInfoPanel(false);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.className.includes("info-panel-modal")) {
        handleClose();
      }
    }
    document.addEventListener("click", handleClickOutside);
  });

  return (
    <div className="info-panel-modal">
      <div className="info-panel">
        <img
          src={close}
          alt="close-info-panel"
          id="close-icon"
          onClick={handleClose}
        />
        <h1 className="info-title">Pomodoro</h1>
        <h2>Work/Study Timer</h2>
        <p>
          The Pomodoro Technique aims to improve productivity and focus by using
          time effectively and minimising interruptions. The basic idea is to
          work in focused, uninterrupted sprints, allowing yourself to recharge
          and refresh your mind with brief breaks in between. After several
          pomodoros, a longer break is taken to help you avoid burnout.
          <br />
          <br />
          The technique uses a timer to break down work into intervals,
          traditionally 25 - 50 minutes in length, separated by short breaks
          around 5 - 10 minutes in between.
        </p>
      </div>
    </div>
  );
}
