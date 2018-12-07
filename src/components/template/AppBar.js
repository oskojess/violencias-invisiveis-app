import React, { Component } from "react";
import classNames from "classnames";
import AppBarComponent from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router";
import styled from "styled-components";

const MainTitle = styled.div`
color: #ec2c22 !important; 
font-weight: bold;
text-align: center;
justify-content: center;

`;

class AppBar extends Component {
  render() {
    const { classes, anchor, open } = this.props;

    return (

      <AppBarComponent
        style={{ backgroundColor: '#fff' }}
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
          [classes[`appBarShift-${anchor}`]]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => this.props.handleDrawerOpen()}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="#ec2c22" noWrap>
          <MainTitle>change.org</MainTitle>
          </Typography>
        </Toolbar>
      </AppBarComponent>
    );
  }
}

export default withRouter(AppBar);
