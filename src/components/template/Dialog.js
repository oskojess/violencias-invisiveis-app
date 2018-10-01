import * as React from "react";
import { withRouter } from "react-router";
import MainTitle from './MainTitle';
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import IconButton from '@material-ui/core/IconButton';

const styles = () => ({
  space: {
    padding: "10px"
  },
  icon: {
    display: "flex",
    justifyContent: "flex-end"
  },
  audioIcon: {
    color: "#1ea896"
  }
});

class SimpleDialog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: this.props.open || false
      }
      this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
      this.setState({ open: false });
    };

    render() {
      const { classes, title } = this.props;
  
      return (
        <Dialog 
          open={this.state.open} 
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title" 
        >
          <MainTitle content={title} icon="error_outline" className={classes.space}></MainTitle>
          <Typography variant="subheading" align="justify" className={classes.space}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER
            ADIPISCING ELIT, SED 
          </Typography>
          <div className={classes.icon}>
            <IconButton 
            aria-expanded={this.state.expanded}
            aria-label="Audio Descrição"
            >
              <VolumeUpIcon className={classes.audioIcon} />
            </IconButton>
          </div>
        </Dialog>
      );
    }
  }

  SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired
  };

  export default withRouter(withStyles(styles)(SimpleDialog));