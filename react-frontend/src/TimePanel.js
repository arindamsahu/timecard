import React, { Component } from 'react';
import { Row, Col, Grid, Panel } from 'react-bootstrap';
import style from './style'

class TimePanel extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
       <Panel>
    		<Panel.Heading>
    			<Panel.Title componentClass="h2">Create Brinker TimeCard</Panel.Title>
    		</Panel.Heading>
    		<Panel.Body>Panel content</Panel.Body>
    		<Panel.Footer></Panel.Footer>
  		</Panel>

    )
  }
}

export default TimePanel;