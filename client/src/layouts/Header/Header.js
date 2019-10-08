import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './Header.style';
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(props.classes);
    return (
      <div className={classes.root}>
        
      </div>
    );
  }
}

export default withStyles(styles)(Header);