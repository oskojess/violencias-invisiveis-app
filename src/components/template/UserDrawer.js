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

class UserRoutes extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangePage(button) {
    new Promise((resolve, reject) => {
      let audio;
      if(button === "dashboard"){
        audio = new Audio('../../../src/components/audioDescriptions/dashboard.mp3');
      }else if(button === "new"){
        audio = new Audio('../../../src/components/audioDescriptions/iniciarAbaixoAssinado.mp3');
      }else if(button === "follow"){
        audio = new Audio('../../../src/components/audioDescriptions/acompanharAbaixoAssinado.mp3');
      }else if(button === "tutorial"){
        audio = new Audio('../../../src/components/audioDescriptions/tutorial.mp3');
      }else if(button === "profile"){
        audio = new Audio('../../../src/components/audioDescriptions/perfil.mp3');
      }
      audio.loop = false;
      audio.play(); 
      resolve();
    })
    .then(() => {
      this.props.history.push('/' + button);
    })
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
        <MenuItem onClick={() => this.handleChangePage("dashboard")}>
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => this.handleChangePage("new")}>
          Iniciar baixo-assinado
        </MenuItem>
        <MenuItem onClick={() => this.handleChangePage("follow")}>
          Acompanhar baixo-assinado
        </MenuItem>
        <MenuItem onClick={() => this.handleChangePage("tutorial")}>Tutorial</MenuItem>
        <MenuItem onClick={() => this.handleChangePage("profile")}>Perfil</MenuItem>
      </DrawerComponent>
    );
  }
}

export default withRouter(UserRoutes);
