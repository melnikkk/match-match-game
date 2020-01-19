import React, { useEffect, useState } from 'react';

function StopWatch () {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
    
  const toggleWatch = () => setIsActive(!isActive);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>{seconds} s</div>
  );
}

export default StopWatch;