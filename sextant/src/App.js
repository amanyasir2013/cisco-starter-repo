import './App.css';
import InfoCard from './components/info-box/infoBox'
import NavBar from './components/navigation-bar/navbar';
import useFetchIP from './util/useFetchIP';
import usePing from './util/usePing';


function App() {

  return (
    <div className="App">

      <NavBar/>

      <div className='Box-Container'>
        <InfoCard header="User Information" lines={[{ text: "IPv4 Addres:", data: useFetchIP()[0], color: useFetchIP()[2] },
        { text: "IPv6 Address:", data: useFetchIP()[1], color: useFetchIP("")[2] },]}/>
        <InfoCard header="Pylon Latency" lines={[{ text: "Ping:", data: `${usePing()[0]}`, color: usePing()[1]}]}/>
      </div>

    </div>
  );
}

export default App;
