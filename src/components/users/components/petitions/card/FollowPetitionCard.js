import * as React from "react";
import { withRouter } from "react-router";
import Divider from '@material-ui/core/Divider';
import MainTitle from '../../../../template/MainTitle';
import PetitionCard from '../../../../template/PetitionCard';
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

class FollowPetitionCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainTitle content="ACOMPANHAMENTO" icon="access_time"></MainTitle>
        <Divider className={classes.titleDivider} />
        <div className={classes.space}></div>
        
        <PetitionCard 
            status={1}
            protocol={"COD918375"}
            description={"Lorem ipsum dolor sit amet, consectetuer adipiscing."}
            observations={"Lorem ipsum dolor sit amet, consectetuer adipiscing."}
        />
      </div>
    );
  }
}

FollowPetitionCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(FollowPetitionCard));

