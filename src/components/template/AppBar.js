import React, { Component } from "react";
import classNames from "classnames";
import AppBarComponent from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { withRouter } from "react-router";

class AppBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme, history, anchor, open } = this.props;

    return (
      <AppBarComponent
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
          [classes[`appBarShift-${anchor}`]]: open
        })}>

        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => this.props.handleDrawerOpen()}
            className={classNames(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            Violências Invisíveis
          </Typography>
        </Toolbar>
      </AppBarComponent>
    );
  }
}

export default withRouter(AppBar);