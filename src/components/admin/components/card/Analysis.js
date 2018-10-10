import * as React from "react";
import { withRouter } from "react-router";
import Divider from "@material-ui/core/Divider";
import MainTitle from "../../../template/MainTitle";
import AnalysisCard from "../../../template/AnalysisCard";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  titleDivider: {
    height: "3px",
    backgroundColor: "#1ea896"
  },
  space: {
    height: "25px"
  },
  backgroundCard: {backgroundColor: "#fff"}
});

class Analysis extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainTitle content="ANALISAR PETIÇÕES" icon="access_time" />
        <Divider className={classes.titleDivider} />
        <div className={classes.space} />

        <AnalysisCard
          className={classes.backgroundCard}
          status={1}
          protocol={"COD918375"}
          description={"Lorem ipsum dolor sit amet, consectetuer adipiscing."}
          observations={"Lorem ipsum dolor sit amet, consectetuer adipiscing."}
        />
      </div>
    );
  }
}

Analysis.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Analysis));
