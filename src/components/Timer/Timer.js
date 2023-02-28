import { useState, useEffect, useRef } from "react";
import restart from "../../assets/restart.svg";
import pause from "../../assets/pause.svg";
import play from "../../assets/play.svg";
import buttonClickSound from "../../assets/switch-button.mp3";
import timerFinishedSound from "../../assets/timer-finished.mp3";
import "./Timer.css";

export default function Timer({
  workTime,
  showWorkTime,
  breakTime,
  showBreakTime,
  soundPreference,
}) {
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [hasBeenActive, setHasBeenActive] = useState(false);
  const [active, setActive] = useState(false);
  const buttonClick = useRef(null);
  const timerFinished = useRef(null);
  const timeLeft =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  active
    ? (document.title = timeLeft + " - Pomodoro timer")
    : (document.title = "Pomodoro timer");

  useEffect(() => {
    if (showWorkTime) {
      setActive(false);
      setMinutes(workTime);
      setSeconds(0);
    } else {
      return;
    }
  }, [workTime, showWorkTime]);

  useEffect(() => {
    if (showBreakTime) {
      setActive(false);
      setMinutes(breakTime);
      setSeconds(0);
    } else {
      return;
    }
  }, [breakTime, showBreakTime]);

  useEffect(() => {
    if (active && seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (active && minutes > 0 && seconds === 0) {
      setTimeout(() => {
        setMinutes(minutes - 1);
        setSeconds(59);
      }, 1000);
    } else if (active && minutes === 0 && seconds === 0) {
      pauseTimer();
      if (soundPreference) {
        timerFinished.current.play();
      }
      setActive(false);
    }
  }, [active, minutes, seconds, pauseTimer, soundPreference]);

  function beginTimer() {
    if (soundPreference) {
      buttonClick.current.play();
    }

    if (hasBeenActive === false) {
      setHasBeenActive(true);
      setMinutes(minutes - 1);
      setSeconds(59);
      setActive(true);
      return;
    } else {
      setActive(true);
      return;
    }
  }

  function pauseTimer() {
    if (soundPreference) {
      buttonClick.current.play();
    }
    setActive(false);
    return;
  }

  function restartTimer() {
    if (soundPreference) {
      buttonClick.current.play();
    }
    setActive(false);
    setSeconds(0);

    if (showWorkTime) {
      setMinutes(workTime);
    } else {
      setMinutes(breakTime);
    }
  }

  return (
    <>
      <div className="time-left">
        <h1>{timeLeft}</h1>
      </div>
      <div className="buttons">
        <audio ref={buttonClick}>
          <source src={buttonClickSound} type="audio/mpeg" />
        </audio>
        <audio ref={timerFinished}>
          <source src={timerFinishedSound} type="audio/mpeg" />
        </audio>
        {active ? (
          <>
            <button
              onClick={beginTimer}
              id="play-button"
              style={{ marginRight: "15px" }}
              className="button-disabled"
            >
              <img src={play} id="play-icon" alt="play-icon" />
            </button>
            <button
              onClick={pauseTimer}
              id="pause-button"
              style={{ marginRight: "15px" }}
            >
              <img
                src={pause}
                id="pause-button"
                className="icon-disabled"
                alt="pause-button"
              />
            </button>
            <button
              onClick={restartTimer}
              id="restart-button"
              className="button-disabled"
            >
              <img src={restart} alt="restart-button" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={beginTimer}
              id="play-button"
              style={{ marginRight: "15px" }}
            >
              <img src={play} id="play-icon" alt="play-button" />
            </button>
            <button
              onClick={pauseTimer}
              id="pause-button"
              style={{ marginRight: "15px" }}
              className="button-disabled"
            >
              <img
                src={pause}
                id="pause-button"
                className="icon-disabled"
                alt="pause-button"
              />
            </button>
            <button
              onClick={restartTimer}
              id="restart-button"
              alt="restart-button"
            >
              <img src={restart} />
            </button>
          </>
        )}
      </div>
    </>
  );
}
