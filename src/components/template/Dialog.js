import * as React from "react";
import { withRouter } from "react-router";
import MainTitle from './MainTitle';
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import IconButton from '@material-ui/core/IconButton';

const styles = () => ({
  space: {
    padding: "10px"
  },
  dialog: {
    display: "flex",
    flexGrow: "1"
  },
  icon: {
    display: "flex",
    justifyContent: "flex-end"
  },
  audioIcon: {
    color: "#1ea896"
  },
  button: {
    borderRadius: "20px",
    padding: "8px 35px",
    color: "#1ea896",
    borderColor: "#1ea896"
  },
  buttons: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "0.5em 0em"
  },
  confirmButton: {
    margin: "auto"
  },
  audioButton: {
    position: "absolute",
    right: "0px"
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
          role="dialog"
          open={this.state.open} 
          onClose={this.handleClose}
          className={classes.dialog}
          aria-labelledby={title} 
        >
          <MainTitle content={title} icon="error_outline" className={classes.space}></MainTitle>
          <Typography variant="subheading" align="justify" className={classes.space}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER
            ADIPISCING ELIT, SED 
          </Typography>
          <DialogActions className={classes.buttons}>
            <div className={classes.confirmButton}>
              <Button type="button" role="button" aria-label="CONTINUAR" variant="outlined" className={classes.button} onClick={this.handleClose} autoFocus>
                CONTINUAR
              </Button>
            </div>
            <div className={classes.audioButton}>
              <IconButton 
              aria-expanded={this.state.expanded}
              aria-label="Audio Descrição"
              >
                <VolumeUpIcon className={classes.audioIcon} />
              </IconButton>
            </div>
          </DialogActions>
        </Dialog>
      );
    }
  }

  SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired
  };

  export default withRouter(withStyles(styles)(SimpleDialog));