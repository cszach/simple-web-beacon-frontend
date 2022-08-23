import React, { useState, useRef } from 'react';
import BeaconsList from './BeaconsList';
// import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [beacons, setBeacons] = useState([])
  const searchRef = useRef();

  function generateBeacon(e) {
    console.log(uuidv4())
    setBeacons(existingBeacons => {
      return [...existingBeacons, { id: 'uuidv4()', activated: false, hidden: false }]
    });
  }

  function onSearchInputChange(e) {
    const searchString = searchRef.current.value;
    const newBeacons = [...beacons];

    newBeacons.forEach(beacon => {
      if (beacon.name.indexOf(searchString) === -1 && beacon.id.indexOf(searchString) === -1) { beacon.hidden = true }
      else beacon.hidden = false;
    })

    setBeacons(newBeacons);
  }

  return (
    <div class="container">
      <div class="controls">
        <input ref={searchRef} type="search" placeholder="Search beacons" onChange={onSearchInputChange}/>
        <button class="generate-button" onClick={generateBeacon}>+ Generate beacon</button>
      </div>
      <BeaconsList beacons={beacons} setBeacons={setBeacons} />
    </div>
  );
}

export default App;