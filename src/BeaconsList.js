import React from 'react';
import Beacon from './Beacon';

export default function BeaconsList({ beacons, setBeacons }) {
  return (
    <ul>
      {
        beacons.filter(beacon => !beacon.hidden).map(beacon => {
          return <Beacon key={beacon.id} data={beacon} beacons={beacons} setBeacons={setBeacons}/>
        })
      }
    </ul>
  );
}
