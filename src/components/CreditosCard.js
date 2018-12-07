import * as React from "react";
import { withRouter } from "react-router";
import MainTitle from "../components/template/MainTitle";

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

class CreditosCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  componentDidMount() {
    document.title = "Violências Invisíveis - Tutorial";
  }

  render() {
    const { classes } = this.props;
    return (
    
        <div>
          <MainTitle content="CRÉDITOS" />

          
      </div>
    );
  }
}

CreditosCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(CreditosCard));
