import React from 'react';
import MapContainer from './MapContainer';

class App extends React.Component {
  state = {

  };
  componentDidMount() {
    // timers, listeners
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="wrapper" style={{height: "100vh"}}>
        {/* Sidebar  */}
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
          </div>
          <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            <li>
              <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
            </li>
            <li>
              <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
            </li>
          </ul>
        </nav>
        {/* Page Content  */}
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" className="btn btn-info">
                <i className="fas fa-align-left" />
                <span>Toggle Sidebar</span>
              </button>
              <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-justify" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <MapContainer events={window.initialData} />
          </div>
        </div>
        </div>
        );
      }
    }
    
export default App;
