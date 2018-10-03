/*global webkitSpeechRecognition*/
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const recognition = new webkitSpeechRecognition() 
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'pt-BR'

const styles = theme => ({
  selected: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    padding: "0.5em",
    borderRadius: "50%",
    fontSize: "1.5rem"
  },
  colorRed: {
    color: "red"
  },
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  },
  final: {
    color: 'black',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
});

class Speech extends Component {
  
  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }
  
  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }
  
  handleListen() {
    if (this.state.listening) {
      recognition.start();
      recognition.onend = () => {
        recognition.start();
      }
    } else {
      recognition.stop();
    }

    let finalTranscript = '';

    recognition.onresult = event => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript;
      document.getElementById('final').innerHTML = finalTranscript;
    }

    recognition.onerror = event => {
      recognition.stop();
    }
  }

  render() {
    const { classes } = this.props;
    const toggleStyle = this.state.listening ? classes.selected : ''; 
    return (
      <div className={classes.container}>
        <IconButton>
            <KeyboardVoice onClick={this.toggleListen} className={toggleStyle} />
        </IconButton>
        {
          this.state.listening 
            &&
          <Typography paragraph variant="caption" className={classes.colorRed}>
            Gravando
          </Typography>
        }
        <div id='interim' className={classes.interim}></div>
        <div id='final' className={classes.final}></div>
      </div>
    )
  }
}

Speech.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Speech);

