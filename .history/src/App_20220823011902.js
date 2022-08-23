import React, { useState, useRef } from 'react';
import BeaconsList from './BeaconsList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function getData(link) {
  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest()

  // get a callback when the server responds
  xhr.addEventListener('load', () => {
    // update the state of the component with the result here
    return xhr.responseText;
  })
  // open the request with the verb and the url
  xhr.open('GET', link)
  // send the request
  xhr.send()
}

function App() {
  const [beacons, setBeacons] = useState([])
  const searchRef = useRef();

  function generateBeacon(e) {
    

    setBeacons(existingBeacons => {
      return [...existingBeacons, { id: getData('https://dog.ceo/api/breeds/list/all'), activated: false, hidden: false }]
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
