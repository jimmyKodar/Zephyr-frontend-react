import { useState } from "react";

const Clock = () => {
  let currentTime = new Date();
  const [time, setTime] = useState(currentTime.toUTCString().slice(-13, -3));

  const UpdateTime = () => {
    let newTime = new Date();
    setTime(newTime.toUTCString().slice(-13, -3));
  };

  setInterval(UpdateTime);
  return <span className="clock timestamp">{time}</span>;
};

export default Clock;
