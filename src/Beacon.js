import React from 'react';

export default function Beacon({ data, beacons, setBeacons }) {
  function deleteBeacon(e) {
    const newBeacons = beacons.filter(beacon => beacon.id !== data.id)
    setBeacons(newBeacons)
  }

  return (
    <li>
      <div>
        <div class="beacon-name">
          {data.id.slice(0, data.id.indexOf("-"))}
        </div>
        <div>
          {data.id}
        </div>
        <div>
          {data.hidden.toString()}
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
