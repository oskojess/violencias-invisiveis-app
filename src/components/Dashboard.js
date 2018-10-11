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
    cursor: "pointer"
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
    justifyContent: "center"
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
  }
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
            <Typography variant="subheading" className={classes.cardTitle} onClick={() => {this.handleCardTitleDescription("INICIAR UM ABAIXO-ASSINADO")}}>
              <Icon className={classes.icon}>star_border</Icon>
              INICIAR UM ABAIXO-ASSINADO
            </Typography>
          </CardContent>
          <Divider className={classes.cardDivider} />
          <CardActions className={classes.cardActions}>
            <MainButton content="COMEÇAR" action={() => history.push("/new")} />
          </CardActions>
        </Card>
        <div className={classes.space} />
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
          <Typography variant="subheading" className={classes.cardTitle} onClick={() => {this.handleCardTitleDescription("INICIAR UM ABAIXO-ASSINADO")}}>
              <Icon className={classes.icon}>star_border</Icon>
              ACOMPANHAMENTO
            </Typography>
          </CardContent>
          <Divider className={classes.cardDivider} />
        </Card>

      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Dashboard));
