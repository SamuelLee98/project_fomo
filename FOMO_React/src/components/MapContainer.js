import React from "react";
import Config from "../../config";
import EventsMap from "./EventsMap";
import axios from 'axios';


class MapContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      events: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get("/api/test")
      .then(result => this.setState({
        events: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    const {events, isLoading} = this.state;

    if(isLoading) {
      return <p>Loading...</p>;
    }
    
    return (
      <EventsMap
        events={events}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${Config.apiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `80vh`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

export default MapContainer;