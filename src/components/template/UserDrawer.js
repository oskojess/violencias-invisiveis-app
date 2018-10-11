import React, { Component } from "react";
import DrawerComponent from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from "react-router";
import audio from '../../utils/audioConfig';

class UserRoutes extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangePage(button, title) {
      audio.text = title;
      speechSynthesis.speak(audio);
      this.props.history.push('/' + button);
  }

  render() {
    const { classes, theme, anchor, open } = this.props;

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
        <ListItem button onClick={() => this.handleChangePage("dashboard", "Dashboard")} aria-label="Dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => this.handleChangePage("new", "Iniciar Abaixo-assinado")} aria-label="Iniciar baixo-assinado">
          <ListItemText primary="Iniciar abaixo-assinado" />
        </ListItem>
        <ListItem button onClick={() => this.handleChangePage("follow", "Acompanhar Abaixo-assinado")} aria-label="Acompanhar baixo-assinado">
          <ListItemText primary="Acompanhar abaixo-assinado" />
        </ListItem>
        <ListItem button onClick={() => this.handleChangePage("tutorial", "Tutorial")} aria-label="Tutorial">
          <ListItemText primary="Tutorial" />
        </ListItem>
        <ListItem button onClick={() => this.handleChangePage("profile", "Perfil")} aria-label="Perfil">
          <ListItemText primary="Perfil" />
        </ListItem>
      </DrawerComponent>
    );
  }
}

export default withRouter(UserRoutes);
