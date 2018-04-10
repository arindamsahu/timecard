//TimeBox.js

import React, { Component } from 'react';
import { Row, Col, Grid, Panel } from 'react-bootstrap';
import TimePanel from './TimePanel'
import style from './style'


class TimeBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <Grid>
        <Row style = { style.header }>
        <Col sm={2}></Col>
        <Col sm={8}>
          <TimePanel></TimePanel>
        </Col>
        <Col sm={2}></Col>
        </Row>
      </Grid>
    )
  }
}

export default TimeBox;