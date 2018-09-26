import * as React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  button: {
    borderRadius: "20px",
    padding: "8px 35px",
    color: "#fff",
    borderColor: "#fff"
  }
});

class MainButton extends React.Component {
  render() {
    const { classes, content } = this.props;
    return (
      <Button variant="outlined" className={classes.button}>
        {content}
      </Button>
    );
  }
}

MainButton.propTypes = {
  classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(MainButton);
