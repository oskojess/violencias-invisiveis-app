import * as React from "react";
import { withRouter } from "react-router";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MainTitleDashboard from "../components/template/MainTitleDashboard";
import MainButton from "./template/MainButton";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import audio from "../utils/audioConfig";
import { connect } from "react-redux";

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
    textTransform: "uppercase"
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
    textTransform: "uppercase"
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
  startPetitionButton: {
    border: "2px solid red",
    borderRadius: "3px"
  },

  spaceDivider: {
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#CDCDC1",
  },
  labelDashboard: {
    
    fontFamily: "Helvetica Neue,Helvetica,Arial,Tahoma,sans-serif",
    fontSize: "18px",
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleCardTitleDescription = this.handleCardTitleDescription.bind(
      this
    );
  }

  componentDidMount() {
    document.title = "Violências Invisíveis - Página Inicial";
  }

  handleCardTitleDescription(title) {
    audio.text = title;
    speechSynthesis.speak(audio);
  }

  render() {
    const { classes, history } = this.props;
    return (
      <div>
        <MainTitleDashboard content="Violências Invisíveis" />

        <div className={classes.space} />
        <Typography align="justify" className={classes.text} />

        <div>
          <img
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              textDecoration: "none",
              justifyContent: "center"
            }}
            src="/src/components/osilencio-change.jpeg"
          />
        </div>
        <CardActions className={classes.cardActions}>
          <MainButton
            content="Fazer abaixo-assinado"
            action={() => history.push("/new")}
            onClick={() => {
              this.handleCardTitleDescription("Fazer abaixo-assinado");
            }}
          />
        </CardActions>
        <div className={classes.labelDashboard}>
          <p><b>Este é o aplicativo para quebrar o silêncio.</b></p>
          <p>
            Bem-vinda! O botão acima te ajuda a criar uma petição. Assim, você
            pode expor seu problema, pedir ajuda e conseguir apoio. Sabemos que
            é um passo difícil, mas te encorajamos a tentar!
          </p>
          <p>
            <b>Use como se fosse o zap.</b> Escreva ou mande áudio para responder as
            perguntas. Em poucos passos você terá sua petição.
          </p>
        </div>
        <div className={classes.space} />
        <div className={classes.spaceDivider} />
 
   
    </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Dashboard));
