import * as React from "react";
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import audio from '../../utils/audioConfig';

const styles = () => ({
  root: {
    padding: "5px",
    cursor: "pointer"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#1ea896"
  },
  icon: {
    paddingRight: "5px",
    fontSize: "36px"
  }
});

class MainTitle extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitleDescription = this.handleTitleDescription.bind(this);
  }

  handleTitleDescription() {
    audio.text = this.props.content;
    speechSynthesis.speak(audio);
  }

  render() {
    const { classes, content, icon } = this.props;
    return (
      <div className={classes.root} onClick={this.handleTitleDescription}>
        <Typography variant="title" align="center" className={classes.title} aria-label={content}>
          {icon !== '' ? <Icon className={classes.icon}>{icon}</Icon> : <div></div>}
          <div role="heading">{content}</div>
        </Typography>
      </div>
    );
  }
}

MainTitle.propTypes = {
  classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(MainTitle);
