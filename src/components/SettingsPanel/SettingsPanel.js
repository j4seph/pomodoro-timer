import { useEffect } from "react";
import close from "../../assets/close.svg";
import soundOnIcon from "../../assets/sound-on.svg";
import soundOffIcon from "../../assets/sound-off.svg";
import clockIcon from "../../assets/clock-white.svg";
import breakIcon from "../../assets/coffee.svg";
import "./SettingsPanel.css";

export default function SettingsPanel({
  setSettingsPanel,
  workTime,
  setWorkTime,
  breakTime,
  setBreakTime,
  soundPreference,
  setSoundPreference,
}) {
  function handleSound() {
    soundPreference ? setSoundPreference(false) : setSoundPreference(true);
  }

  function handleWorkTimeChange(event) {
    setWorkTime(event.target.value);
  }

  function handleBreakTimeChange(event) {
    setBreakTime(event.target.value);
  }

  function handleClose() {
    setSettingsPanel(false);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.className.includes("settings-panel-modal")) {
        handleClose();
      }
    }
    document.addEventListener("click", handleClickOutside);
  });

  return (
    <div className="settings-panel-modal">
      <div className="settings-panel">
        <img
          src={close}
          alt="close-settings-panel"
          id="close-icon"
          onClick={handleClose}
        />

        <h1 className="settings-title">Settings</h1>

        <h2>Work/Study Timer</h2>
        <div className="work-slider">
          <img src={clockIcon} alt="work-timer-icon" />
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={workTime}
            onChange={handleWorkTimeChange}
            className="slider"
          />
          <p>{workTime} minutes</p>
        </div>

        <hr />

        <h2>Break Timer</h2>
        <div className="break-slider">
          <img src={breakIcon} alt="break-timer-icon" />
          <input
            type="range"
            min={5}
            max={30}
            step={5}
            value={breakTime}
            onChange={handleBreakTimeChange}
            className="slider"
          />
          <p>{breakTime} minutes</p>
        </div>

        <hr />

        <div className="settings-icons">
          {soundPreference ? (
            <img
              src={soundOnIcon}
              alt="sound-on"
              className="icon"
              onClick={handleSound}
            />
          ) : (
            <img
              src={soundOffIcon}
              alt="sound-off"
              className="icon"
              onClick={handleSound}
            />
          )}
        </div>
      </div>
    </div>
  );
}
