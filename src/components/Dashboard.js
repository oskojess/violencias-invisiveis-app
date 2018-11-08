import * as React from "react";
import { withRouter } from "react-router";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MainTitle from "../components/template/MainTitle";
import MainButton from "./template/MainButton";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import audio from '../utils/audioConfig';
import { connect } from 'react-redux';

const styles = () => ({
  space: {
    height: "25px"
  },
  text: {
    paddingBottom: "1em"
  },
  cardTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  icon: {
    paddingRight: "5px",
    fontSize: "26px"
  },
  card: {
    backgroundColor: "#1ea896"
  },
  cardContent: {
    paddingTop: "8px",
    paddingBottom: "8px"
  },
  cardActions: {
    paddingTop: "16px",
    paddingBottom: "16px",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  titleDivider: {
    height: "3px",
    backgroundColor: "#1ea896"
  },
  cardDivider: {
    width: "90%",
    textAlign: "center",
    margin: "0 auto",
    backgroundColor: "#fff"
  }, 

});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleCardTitleDescription = this.handleCardTitleDescription.bind(this);
  }

  componentDidMount(){
    document.title = "Violências Invisíveis - Dashboard"
  }

  handleCardTitleDescription(title) {
    audio.text = title;
    speechSynthesis.speak(audio);
  }

  render() {
    const { classes, history } = this.props;
    return (
      <div>
        <MainTitle content="BEM-VINDA AO VIOLÊNCIAS INVISÍVEIS" icon="stars" />
        <Divider className={classes.titleDivider} />
        <div className={classes.space} />
        <Typography align="justify" className={classes.text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="subheading"
              className={classes.cardTitle}
              onClick={() => {
                this.handleCardTitleDescription("Iniciar Petição");
              }}
            >
              <Icon className={classes.icon}>description</Icon>
              Iniciar petição
            </Typography>
          </CardContent>
          <Divider className={classes.cardDivider} />
          <CardActions className={classes.cardActions}>
            <MainButton content="começar" action={() => history.push("/new")} />
          </CardActions>
        </Card>
        <div className={classes.space} />
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="subheading"
              className={classes.cardTitle}
              onClick={() => {
                this.handleCardTitleDescription("Acompanhamento");
              }}
            >
              <Icon className={classes.icon}>access_time</Icon>
              Acompanhamento
            </Typography>
          </CardContent>
          <Divider className={classes.cardDivider} />
          <CardActions className={classes.cardActions}>
            <MainButton content="ver" action={() => history.push("/follow")} />
          </CardActions>
        </Card>

        <div className={classes.space} />
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="subheading"
              className={classes.cardTitle}
              onClick={() => {
                this.handleCardTitleDescription("Tutorial");
              }}
            >
              <Icon className={classes.icon}>error_outline</Icon>
              Tutorial
            </Typography>
          </CardContent>
          <Divider className={classes.cardDivider} />
          <CardActions className={classes.cardActions}>
            <MainButton
              content="Assistir"
              action={() => history.push("/tutorial")}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Dashboard));
