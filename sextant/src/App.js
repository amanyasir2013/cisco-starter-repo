import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [getIpAddress, setIpAddress] = useState("");

  useEffect(() => {
    fetch("https://api64.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));
  }, []);


  return (
    <div className="App">
      <div className='header-banner'>
        <h1>Sextant</h1>

        <div className='navbar'>

        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Settings</li>
        </ul>

        </div>

        
      </div>

      <div className='middle-section'>
        
        <div className='box-containers'>

          <div className='box'>
            <h4>User information</h4>
            <div className='top-border'/>
            <p>IP: {getIpAddress}</p>

          </div>

          <div className='box'>
            <h4>Pylon Latency</h4>
            <div className='top-border'/>
            <p>Ping: 0ms</p>
          </div>

          <div className='box'>
            <h4>Data Points</h4>
            <div className='top-border'/>
            <p>Null</p>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;
