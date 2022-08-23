import React, { useRef } from 'react';

export default function Beacon({ data, beacons, setBeacons }) {
  const beaconName = useRef();

  function updateName(e) {
    const beacon = beacons.filter(beacon => beacon.id === data.id)[0];
    beacon.name = beaconName.current.value;

    setBeacons(beacons);
  }

  function deleteBeacon(e) {
    const newBeacons = beacons.filter(beacon => beacon.id !== data.id)
    setBeacons(newBeacons)
  }

  return (
    <li>
      <div>
        <div class="beacon-name">
          <input ref={beaconName} type="text" placeholder={new Date().toLocaleString() + ' | Click to edit...'} value={data.name} onUnfocus={updateName} />
        </div>
        <div class="beacon-id">
          {data.id}
        </div>
      </div>
      <div class="status">
        {(data.activated) ? "Opened" : "Not opened"}
      </div>
      <div>
        <button onClick={deleteBeacon}>✖</button>
      </div>
    </li>
  )
}
