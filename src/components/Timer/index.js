import { memo, useEffect, useState } from 'react';

function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "August, 15, 2023";
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'));
        setMinutes(Math.floor((time / 1000 / 60) % 60).toString().padStart(2, '0'));
        setSeconds(Math.floor((time / 1000) % 60).toString().padStart(2, '0'));
      };
    
      useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
      }, []);
  const Line = () => {
    return (
      <div className="timer__line">
        <svg
          width="26"
          height="4"
          viewBox="0 0 26 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_d_2563_2399)">
            <path d="M0 1.86301H25.1048" stroke="#979797" stroke-width="0.5" />
          </g>
          <defs>
            <filter
              id="filter0_d_2563_2399"
              x="-1"
              y="0.613007"
              width="27.1048"
              height="2.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2563_2399"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2563_2399"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    );
  };


  return (
    <>
      <span className="head__left_title">Plus que</span>
      <div className="timer">
        <div className="timer__item-container">
          <div className="timer__item">
            <Line />
            <span className="timer__time">{days}</span>
          </div>
          <span className="timer__word">Jours</span>
        </div>
        <div className="timer__item-container">
          <div className="timer__item">
            <Line />
            <span className="timer__time">{hours}</span>
          </div>
          <span className="timer__word">Heures</span>
        </div>
        <div className="timer__item-container">
          <div className="timer__item">
            <Line />
            <span className="timer__time">{minutes}</span>
          </div>
          <span className="timer__word">Minutes</span>
        </div>
        <div className="timer__item-container">
          <div className="timer__item">
            <Line />
            <span className="timer__time">{seconds}</span>
          </div>
          <span className="timer__word">Secondes</span>
        </div>
      </div>
    </>
  );
}
export default memo(Timer);
