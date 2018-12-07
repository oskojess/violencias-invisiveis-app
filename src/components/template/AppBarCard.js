import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import UserDrawer from "./UserDrawer";

import AppBar from "./AppBar";
import { withRouter } from "react-router";
//import AdminDrawer from "./AdminDrawer";
 
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: "100vh",
    zIndex: 1,
    overflow: "auto",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    color: "#696969 !important",
  },
  cardStyle: {
    display: "flex",
    backgroundColor: "#9E002D",
    padding: 60,
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    backgroundColor: "#EDEDED",
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  }, 
  icon: {
    fontSize: "20px",
  },

});

class AppBarCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: "left"
    };
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes, theme, history } = this.props;
    const { anchor, open } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            classes={classes}
            theme={theme}
            history={history}
            anchor={anchor}
            open={open}
         
            handleDrawerOpen={() => this.handleDrawerOpen()}
          />
          <UserDrawer
            classes={classes}
            theme={theme}
            history={history}
            anchor={anchor}
            open={open}
     
            handleDrawerClose={() => this.handleDrawerClose()}
          />
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}
          >
            <div className={classes.drawerHeader} />
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

AppBarCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles, { withTheme: true })(AppBarCard));
