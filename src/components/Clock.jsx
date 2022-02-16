import React from "react";
import { useState } from "react";

const now = new Date().toLocaleTimeString();

const Clock = () => {
  const [time, setTime] = useState(now);

  const getTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(getTime, 1000);

  return (
    <div className="clock">
      <h1>{time}</h1>
      {/* <button onClick={getTime}>Get Time</button> */}
    </div>
  );
};

export default Clock;
