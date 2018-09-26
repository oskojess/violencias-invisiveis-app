import * as React from "react";
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    padding: "5px"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    paddingRight: "5px",
    fontSize: "36px"
  }
});

class MainTitle extends React.Component {
  render() {
    const { classes, content, icon } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="title" align="center" className={classes.center}>
          {icon !== '' ? <Icon className={classes.icon}>{icon}</Icon> : <div></div>}
          <div>{content}</div>
        </Typography>
      </div>
    );
  }
}

MainTitle.propTypes = {
  classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(MainTitle);
