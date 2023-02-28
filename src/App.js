import { useState } from "react";
import React from "react";
import Timer from "./components/Timer/Timer.js";
import TimerTopButtons from "./components/TimerTopButtons/TimerTopButtons.js"
import "./App.css";

function App() {
  const [workTime, setWorkTime] = useState(50);
  const [showWorkTime, setShowWorkTime] = useState(true);
  const [breakTime, setBreakTime] = useState(10);
  const [showBreakTime, setShowBreakTime] = useState(false);
  const [soundPreference, setSoundPreference] = useState(true);

  return (
    <div className="App">
      <TimerTopButtons
        workTime={workTime}
        setWorkTime={setWorkTime}
        showWorkTime={showWorkTime}
        setShowWorkTime={setShowWorkTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        showBreakTime={showBreakTime}
        setShowBreakTime={setShowBreakTime}
        soundPreference={soundPreference}
        setSoundPreference={setSoundPreference}
      />
      <Timer
        workTime={workTime}
        setWorkTime={setWorkTime}
        showWorkTime={showWorkTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        showBreakTime={showBreakTime}
        soundPreference={soundPreference}
      />
    </div>
  );
}

export default App;
