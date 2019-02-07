import React from "react";
import { Container } from 'react-bootstrap';
import './HighLight.css';

class HighLight extends React.Component {


  render() {
    return (
      <Container className="container">
        <p className="lead">Below is a bar chart. It has {this.props.data.length} datapoints. Move your mouse to the bar, it will show you the data.</p>
        <Container className="inner-container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Date</h5>
              <h6 className="card-subtitle mb-2">{(this.props.currentIndex !== null) ?
                                                          this.props.data[this.props.currentIndex].date :
                                                          <small>Move your mouse to the bar</small>
                                                        }
              </h6>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Value</h5>
              <h6 className="card-subtitle mb-2">{(this.props.currentIndex !== null) ?
                                                          this.props.data[this.props.currentIndex].value :
                                                          <small>Move your mouse to the bar</small>
                                                        }
              </h6>
            </div>
          </div>       
        </Container>
      </Container>
    )
  }
}

export default HighLight;

