import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DrawerComponent from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { withRouter } from "react-router";

class AdminDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, theme, history, anchor, open } = this.props;

    return (
      <DrawerComponent
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="title" color="inherit" noWrap>
            Menu
          </Typography>
          <IconButton onClick={() => this.props.handleDrawerClose()}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <MenuItem onClick={() => history.push("/dashboard")}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => history.push("/petitions")}>Petições</MenuItem>

        <MenuItem onClick={() => history.push("/tutorial")}>Tutorial</MenuItem>
        <MenuItem onClick={() => history.push("/profile")}>Perfil</MenuItem>
      </DrawerComponent>
    );
  }
}

export default withRouter(AdminDrawer);
