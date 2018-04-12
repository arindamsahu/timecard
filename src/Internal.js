import React, { Component } from 'react';
import {Panel } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Avatar from 'material-ui/Avatar';
import style from './style'

class Internal extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <Card>
    <CardHeader title="Cognizant Internal" avatar = {<Avatar icon={<FileFolder />}/>}/>

    <CardText>
    <TextField  hintText="Skillset " /> 
      <TextField  hintText="Cognizant Domain" /> 
    </CardText>
    <CardActions>
    </CardActions>
  </Card>
    )
  }
}

export default Internal;