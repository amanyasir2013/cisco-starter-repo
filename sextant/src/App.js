import './App.css';

function App() {
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
            <h4>IP Address</h4>
            <div className='top-border'/>
            <p>IP: 127.0.0.1</p>

          </div>

          <div className='box'>
            <h4>Latency Data</h4>
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
