import { useState, useEffect } from 'react';

export default function usePing() {
  const [ping, setPing] = useState(null);
  const [colorClass, setColorClass] = useState('red');
  const [error, setError] = useState(null);

  useEffect(() => {
    const pingInterval = setInterval(() => {
      const newSocket = new WebSocket('ws://localhost:55455');

      const pingStart = Date.now();

      const handleSocketOpen = () => {
        const pingEnd = Date.now();
        const pingTime = pingEnd - pingStart;
        setPing(pingTime);

        switch (true) {
          case pingTime < 50:
            setColorClass('green');
            break;
          case pingTime < 100:
            setColorClass('yellow');
            break;
          case pingTime < 200:
            setColorClass('orange');
            break;
          default:
            setColorClass('red');
            break;
        }

        newSocket.close();
      };

      const handleSocketError = (error) => {
        setError(error.message);
        setPing(null);
        setColorClass('red');
        newSocket.close();
      };

      newSocket.addEventListener('open', handleSocketOpen);
      newSocket.addEventListener('error', handleSocketError);
    }, 5000);

    return () => clearInterval(pingInterval);
  }, []);

  const pingValue = error ? error : (ping ? `${ping} ms` : "Failed to communicate with Pylon");
  return [pingValue, colorClass];
}