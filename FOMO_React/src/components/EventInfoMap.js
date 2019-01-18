import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default class EventInfoMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      infoIndex: null
    };
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  showInfo(index) {
    this.setState({
      isOpen: this.state.infoIndex !== index || !this.state.isOpen,
      infoIndex: index
    });
  }

  render() {
    const markers = this.props.events.map((event, index) => (
      <Marker
        key={index}
        position={{ lat: event.lat, lng: event.lng }}
        onClick={() => this.showInfo(index)}
      >
        {(this.state.infoIndex === index && this.state.isOpen) &&
          <InfoWindow
            onCloseClick={this.handleToggleOpen}
            options={{ maxWidth: 500 }}
          >
            <div>
              <div className="container-fluid text-primary">
                <h4>{event.title}</h4>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">
                    </img>
                  </div>
                  <div className="col-sm-8">
                    <h6 className="text-primary">Description</h6>
                    <p>{event.descript}</p>
                    <h6 className="text-primary">Time</h6>
                    <p>{event.date}, {event.time}</p>
                    <h6 className="text-primary">Location</h6>
                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </InfoWindow>}
      </Marker>

    ));
    return (
      <div>
        {markers}
      </div>
    );
  }

}