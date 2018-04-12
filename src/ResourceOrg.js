import React, { Component } from 'react';
import {Panel } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import style from './style'

class ResourceOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgId:"",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
        <Card>
    <CardHeader title="Resource & Org Details" avatar="https://www.material-ui.com/images/jsa-128.jpg"/>

    <CardText>
    <TextField  hintText="Org Owner No" name="orgId" value={ this.state.orgId } onChange={this.handleChange} /> 
    <TextField  value={ this.state.name } name="name" hintText="Resource Name" onChange={this.handleChange} /> 
    </CardText>
    <CardActions>
    </CardActions>
  </Card>
    )
  }
}

export default ResourceOrg;