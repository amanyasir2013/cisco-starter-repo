import './App.css';
import InfoCard from './components/info-box/infoBox'
import NavBar from './components/navigation-bar/navbar';
import useFetchIP from './util/useFetchIP';

function App() {

  return (
    <div className="App">

      <NavBar/>

      <div className='Box-Container'>

      <InfoCard
        header="User Information"
        lines={[

          
          { text: "IPv4 Address", data: useFetchIP()[0], color: useFetchIP()[2] },
          { text: "IPv6 Address", data: useFetchIP()[1], color: useFetchIP()[2] },
        ]}
      />
      <InfoCard
        header="Pylon Information"
        lines=
        {[
          { text: "Line 1:", data: "Data 1" },
        ]}
      />

    <InfoCard
        header="Additional Data"
        lines=
        {[
          { text: "Line 1:", data: "Data 1" },
        ]}
      />
      </div>


    </div>
  );
}

export default App;
