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
import audio from '../../utils/audioConfig';

const styles = () => ({
  text: {
    padding: "10px",
    cursor: "pointer"
  },
  dialog: {
    display: "flex"
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
      this.handleAudioDescription = this.handleAudioDescription.bind(this);
    }

    handleClose() {
      this.setState({ open: false });
      this.handleAudioDescription("Continuar");
    };

    handleAudioDescription(text) {
      audio.text = text;
      speechSynthesis.speak(audio);
    }

    render() {
      const { classes, title, content } = this.props;
  
      return (
        <Dialog 
          role="dialog"
          open={this.state.open} 
          onClose={this.handleClose}
          className={classes.dialog}
          aria-labelledby={title}
          fullWidth={true} 
        >
          <MainTitle content={title} icon="error_outline" className={classes.text}></MainTitle>
          <Typography variant="subheading" align="justify" className={classes.text} onClick={() => this.handleAudioDescription(content)}>
           {content}
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
              onClick={() => this.handleAudioDescription(`Tutorial ${content}`)}
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