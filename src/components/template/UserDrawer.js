import React, { Component } from "react";
import DrawerComponent from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";


import audio from "../../utils/audioConfig";

import IconProfile from "./IconProfile";


const styles = () => ({
  dividerStyle:{
    textAlign: "center",
    margin: "0 auto",
    backgroundColor: "#CDCDC1",
  }, 
  iconMenu: {
    paddingRight: "2px",
    fontSize: "20px",
    color: "#5B5B5F"
  }, 
  fontStyle:{
    fontColor: "#5B5B5F",
    textTransform: "uppercase",
  },
  menu:{
    display: "flex",
    justifyContent: "center",
    height: "64px",
    alignItems: "center",
    padding: "0px"
  }
});

class UserRoutes extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangePage(button, title) {
    audio.text = title;
    speechSynthesis.cancel();
    speechSynthesis.speak(audio);
    this.props.history.push("/" + button);
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
        <div className={classes.menu}>
          <IconButton onClick={() => this.props.handleDrawerClose()}>
            {theme.direction === "rtl" ? (
              <Icon className={classes.icon}> close </Icon>
            ) : (
              <Icon className={classes.icon}> close </Icon>
            )}
          </IconButton>
        </div>
        <Divider />
        <ListItem
          button
          onClick={() => this.handleChangePage("dashboard", "Página Inicial")}
          aria-label="Página Inicial"
        >
          <Icon className={classes.iconMenu}>home</Icon>
          <ListItemText className={classes.fontStyle} primary="Página Inicial" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() =>
            this.handleChangePage("new", "Iniciar abaixo-assinado")
          }
          aria-label="Iniciar baixo-assinado"
        >
        <Icon className={classes.iconMenu}>description</Icon>
      
          <ListItemText className={classes.fontStyle} primary="Fazer abaixo-assinado" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() =>
            this.handleChangePage("follow", "Acompanhar o seu abaixo-assinado")
          }
          aria-label="Acompanhar abaixo-assinado"
        >
          <Icon className={classes.iconMenu}>schedule</Icon>
          <ListItemText className={classes.fontStyle} primary="Acompanhar" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() => this.handleChangePage("tutorial", "Tutorial.  Aqui você vai aprender como fazer uma petição de sucesso. Assista ao vídeo ou siga os passos abaixo")}
          aria-label="Tutorial"
        >
          <Icon className={classes.iconMenu}>play_arrow</Icon>
          <ListItemText  className={classes.fontStyle} primary="Tutorial" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() => this.handleChangePage("creditos", "Créditos")}
          aria-label="Créditos"
        >
          <Icon className={classes.iconMenu}>
          copyright
          </Icon>
          <ListItemText className={classes.fontStyle} primary="Créditos" />
        </ListItem>
      </DrawerComponent>
    );
  }
}

export default withRouter(withStyles(styles)(UserRoutes));
