import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

class SideDrawer extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const sideList = (
      <div>
        <List>
          {["Register", "Login", "Projects"].map((text, index) => (
            <ListItem button key={text}>
              {text}
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <Drawer open={this.state.left} onClose={this.toggleDrawer("left", false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer("left", false)}
          onKeyDown={this.toggleDrawer("left", false)}
        >
          {sideList}
        </div>
      </Drawer>
    );
  }
}


export default SideDrawer;