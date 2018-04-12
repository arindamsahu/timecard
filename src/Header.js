import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import style from './style';

class Header extends Component{
	  constructor(props) {
    	super(props);
  	}

  // handleLeftIconClick(event){
  // 	this.setState({open: !this.state.open});
  // }

  render() {
    return (
     <AppBar style={style.navbar} title="Cognizant"/>
    )
  }
}

export default Header;