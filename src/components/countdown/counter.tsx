import React, { useState, useEffect } from 'react';

interface CountdownProps {
  startTime: Date;
  endTime: Date;
  onTimerComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownProps> = ({
  startTime,
  endTime,
  onTimerComplete = () => {},
}) => {
  const [timeLeft, setTimeLeft] = useState(
    Math.floor((endTime.getTime() - startTime.getTime()) / 1000)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerComplete();
    }
  }, [timeLeft, onTimerComplete]);

  const formatTime = (time: number): string => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${days} days, ${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <div style={{ marginLeft:'5px'}}>{formatTime(timeLeft)}</div>;
};

export default CountdownTimer;
