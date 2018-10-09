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
        <ListItem button onClick={() => history.push("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => history.push("/petitions")}>
          <ListItemText primary="Petições" />
        </ListItem>
        <ListItem button onClick={() => history.push("/tutorial")}>
          <ListItemText primary="Tutorial" />
        </ListItem>
        <ListItem button onClick={() => history.push("/profile")}>
          <ListItemText primary="Perfil" />
        </ListItem>
      </DrawerComponent>
    );
  }
}

export default withRouter(AdminDrawer);
