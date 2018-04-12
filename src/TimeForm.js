
import React, { Component } from 'react';
import { Row, Col, Grid, FormGroup } from 'react-bootstrap';
import style from './style'

class TimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
    	<form>
        <FormGroup controlId="formTime">
      <Grid>
      <Row>
      <Col sm={4}></Col>
      </Row>
      </Grid>
        </FormGroup>
      </form>
    )
  }
}

export default TimeForm;