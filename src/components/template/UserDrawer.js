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
    width: "80%",
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
  }
});

class UserRoutes extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangePage(button, title) {
    audio.text = title;
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
        <div className={classes.cardStyle}>
          <IconProfile />
      
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
          <Icon className={classes.iconMenu}>description</Icon>
          <ListItemText primary="PÁGINA INICIAL" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() =>
            this.handleChangePage("new", "Iniciar Abaixo-assinado")
          }
          aria-label="Iniciar baixo-assinado"
        >
        <Icon className={classes.iconMenu}>description</Icon>
      
          <ListItemText className={classes.fontStyle} primary="INICIAR" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() =>
            this.handleChangePage("follow", "Acompanhar Abaixo-assinado")
          }
          aria-label="Acompanhar baixo-assinado"
        >
          <Icon className={classes.iconMenu}>access_time</Icon>
          <ListItemText primary="ACOMPANHAR" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() => this.handleChangePage("tutorial", "Tutorial")}
          aria-label="Tutorial"
        >
          <Icon className={classes.iconMenu}>error_outline</Icon>
          <ListItemText primary="TUTORIAL" />
        </ListItem>
        <Divider className={classes.dividerStyle} />
        <ListItem
          button
          onClick={() => this.handleChangePage("profile", "Meu Perfil")}
          aria-label="Meu Perfil"
        >
          <Icon className={classes.iconMenu}>
            <svg>
              <path d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z" />
            </svg>
          </Icon>
          <ListItemText primary="MEU PERFIL" />
        </ListItem>
      </DrawerComponent>
    );
  }
}

export default withRouter(withStyles(styles)(UserRoutes));
