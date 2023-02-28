import { useState } from "react";
import SettingsPanel from "../SettingsPanel/SettingsPanel.js";
import InfoPanel from "../InfoPanel/InfoPanel.js";
import settings from "../../assets/settings.svg";
import info from "../../assets/info.svg";
import clockIcon from "../../assets/clock.svg";
import clockIconDisabled from "../../assets/clock-disabled.svg";
import breakIcon from "../../assets/coffee-blue.svg";
import breakIconDisabled from "../../assets/coffee-disabled.svg";
import "./TimerTopButtons.css";

export default function InfoAndSettings({
  workTime,
  setWorkTime,
  showWorkTime,
  setShowWorkTime,
  breakTime,
  setBreakTime,
  showBreakTime,
  setShowBreakTime,
  soundPreference,
  setSoundPreference,
}) {
  const [infoPanel, setInfoPanel] = useState(false);
  const [settingsPanel, setSettingsPanel] = useState();

  function handleTimerType() {
    if (showWorkTime) {
      setShowWorkTime(false);
      setShowBreakTime(true);
    } else {
      setShowWorkTime(true);
      setShowBreakTime(false);
    }
  }

  function handleInfoPanel() {
    infoPanel ? setInfoPanel(false) : setInfoPanel(true);
  }

  function handleSettingsPanel() {
    settingsPanel ? setSettingsPanel(false) : setSettingsPanel(true);
  }

  return (
    <div className="info-and-settings">
      {infoPanel && <InfoPanel setInfoPanel={setInfoPanel} />}
      <img src={info} className="icon" onClick={handleInfoPanel} />

      {showWorkTime ? (
        <img src={clockIcon} alt="study-timer-selected" className="active" />
      ) : (
        <img
          src={clockIconDisabled}
          alt="study-timer-off"
          className="icon"
          onClick={handleTimerType}
        />
      )}

      {showBreakTime ? (
        <img src={breakIcon} alt="break-timer-selected" className="active" />
      ) : (
        <img
          src={breakIconDisabled}
          alt="break-timer-off"
          className="icon"
          onClick={handleTimerType}
        />
      )}

      {settingsPanel && (
        <SettingsPanel
          workTime={workTime}
          breakTime={breakTime}
          setSettingsPanel={setSettingsPanel}
          setWorkTime={setWorkTime}
          setBreakTime={setBreakTime}
          soundPreference={soundPreference}
          setSoundPreference={setSoundPreference}
        />
      )}
      <img src={settings} className="icon" onClick={handleSettingsPanel} />
    </div>
  );
}
