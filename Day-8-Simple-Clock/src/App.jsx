import React, { useState, useEffect } from 'react';

function App() {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDay(now.toLocaleDateString('en-US', { weekday: 'long' }));
      setDate(now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div id="day" className="text-xl font-semibold mb-2">{day}</div>
      <div id="date" className="text-xl font-semibold mb-2">{date}</div>
      <div id="time" className="text-xl font-semibold">{time}</div>
    </div>
  );
}

export default App;