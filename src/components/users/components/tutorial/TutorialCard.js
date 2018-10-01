import * as React from "react";
import { withRouter } from "react-router";
import Divider from '@material-ui/core/Divider';
import MainTitle from '../../../template/MainTitle';
import SimpleDialog from '../../../template/Dialog';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  titleDivider: {
    height: "3px",
    backgroundColor: "#1ea896"
  },
  space: {
    height: "25px"
  }
});

class TutorialCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainTitle content="TUTORIAL" icon="error_outline"></MainTitle>
        <Divider className={classes.titleDivider} />
        <div className={classes.space}></div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/FnGfgb_YNE8" frameBorder="0" allowFullScreen></iframe>
        <SimpleDialog
          title={"TUTORIAL"}
          open={true}
        />
      </div>
    );
  }
}

TutorialCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(TutorialCard));
