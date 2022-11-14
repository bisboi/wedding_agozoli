import React, { useEffect, useMemo, useState } from 'react';
import './Timer.css';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const ÓRA = MINUTE * 60;
const NAP = ÓRA * 24;

export const Timer = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  });

  return (
    <div className="timer">
      {Object.entries({
        Nap: time / NAP,
        Óra: (time / ÓRA) % 24,
        Perc: (time / MINUTE) % 60,
        Másodperc: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="col-4">
          <div className="box">
            <p>{`${Math.floor(value)}`.padStart(2, '0')}</p>
            <span className="text">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timer;
