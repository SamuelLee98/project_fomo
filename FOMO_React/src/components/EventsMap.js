import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import EventInfoMap from "./EventInfoMap";

const EventsMap = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={16}
      center={{ lat: 34.021177, lng: -118.284688 }}
    >
      <EventInfoMap events={props.events} />
    </GoogleMap>
  );
}
))


export default EventsMap;