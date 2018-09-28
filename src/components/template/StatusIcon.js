import * as React from "react";
import Icon from '@material-ui/core/Icon';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from 'classnames';

const styles = () => ({
  icon: {
    paddingLeft: "5px",
    fontSize: "26px"
  },
  approved: {
    color: "#00D6B2"
  },
  waiting: {
    color: "#EFBB45"
  },
  unapproved: {
    color: "#DB193A"
  }
});

class StatusIcon extends React.Component {
  render() {
    const { classes, status } = this.props;
    const icon = () => {
      switch(status) {
        case 1: 
          return <Icon className={classnames(classes.icon, classes.approved)}>check_circle</Icon>
        case 2: 
          return <Icon className={classnames(classes.icon, classes.waiting)}>access_time</Icon>
        case 3: 
          return <Icon className={classnames(classes.icon, classes.unapproved)}>cancel</Icon>
        default: 
          return <Icon className={classnames(classes.icon, classes.waiting)}>access_time</Icon>
      }
    };
    return (
      <div>
        {icon()}
      </div>
    );
  }
}

StatusIcon.propTypes = {
  classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(StatusIcon);
