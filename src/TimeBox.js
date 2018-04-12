//TimeBox.js

import React, { Component } from 'react';
import { Row, Col, Grid, Panel } from 'react-bootstrap';
import ResourceOrg from './ResourceOrg'
import AFEDetails from './AFEDetails'
import Internal from './Internal'
import Header from './Header'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import style from './style'


class TimeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {row:[{phase:"", notes:"", weekStartDate:""}]};
    this.handleAddNotes = this.handleAddNotes.bind(this);
  }

  handleAddNotes(event){
    this.setState({ 
      row: this.state.row.concat([{phase:"",notes:"", weekStartDate:""}])
    });
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <Grid>
            <Row style={style.gap8}>
              <Col sm={4}><ResourceOrg/></Col>
              <Col sm={4}><AFEDetails/></Col>
              <Col sm={4}><Internal/></Col>
            </Row>

            <Row style={style.gap}> 
              <Col smOffset={11}>
                <FloatingActionButton secondary={true} onClick={this.handleAddNotes}>
                  <ContentAdd label="Add"/>
                </FloatingActionButton>
              </Col>
            </Row>

      {this.state.row.map((row, idx) => (
          <Card style={style.gap}>
          <CardHeader title={"Work Details # " + (idx+1)} showExpandableButton={true}></CardHeader>
          <CardText>
          <Row style={style.gap}>
            <Col sm={4}><TextField hintText="Week Start Date" name="weekStartDate"/></Col>
            <Col sm={4}><TextField hintText="Phase" name="phase"/></Col>
            <Col sm={4}><TextField hintText="Notes" name="note" multiLine={true} rows={1} rowsMax={15}/></Col>
        </Row>
        </CardText>
        </Card>
      ))}     
    
      <Row style={style.gap}>
        <Col xsOffset={5}><RaisedButton label="Submit" secondary={true} /></Col>
      </Row>

      </Grid>
      </div>
      </div>
      )
  }
}

export default TimeBox;