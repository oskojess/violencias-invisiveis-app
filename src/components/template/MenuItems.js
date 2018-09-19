//flow

import * as React from "react";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";

import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

class MenuItems extends React.Component {
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
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    return (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => this.handleDrawerClose()}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <MenuItem>Iniciar baixo-assinado</MenuItem>
        <MenuItem onClick={this.handleClose}>
          Acompanhar baixo-assinado
        </MenuItem>
        <MenuItem onClick={this.handleClose}>Tutorial</MenuItem>
        <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuItems);
