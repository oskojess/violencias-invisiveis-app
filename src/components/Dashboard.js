import * as React from "react";
import { withRouter } from "react-router";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import MainTitleDashboard from "../components/template/MainTitleDashboard";
import MainButton from "./template/MainButton";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import audio from "../utils/audioConfig";
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    justifyContent: "center",
    margin: "0 auto",
    backgroundColor: "#CDCDC1"
  },
  startPetitionButton: {
    border: "2px solid red",
    borderRadius: "3px"
  },
  labelDashboard: {
    fontFamily: "Helvetica Neue,Helvetica,Arial,Tahoma,sans-serif",
    fontSize: "18px"
  },
  styleFont: {
    fontFamily: "Helvetica Neue,Helvetica,Arial,Tahoma,sans-serif"
  },
  styleText:{
    color: "#CDCDC1",
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
      <div className={classes.styleFont}>
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
          <p>
            <b>Este é o aplicativo para quebrar o silêncio.</b>
          </p>
          <p>
            Bem-vinda! O botão acima te ajuda a criar uma petição. Assim, você
            pode expor seu problema, pedir ajuda e conseguir apoio. Sabemos que
            é um passo difícil, mas te encorajamos a tentar!
          </p>
          <p>
            <b>Use como se fosse o zap.</b> Escreva ou mande áudio para
            responder as perguntas. Em poucos passos você terá sua petição.
          </p>
        </div>
        <div className={classes.space} />
        <Divider className={classes.cardDivider} />
        <ListItem
          button
          onClick={() =>
            this.handleChangePage("follow", "Acompanhar o seu abaixo-assinado")}
      style={{  justifyContent: "center"}}
          aria-label="Acompanhar abaixo-assinado"
        >
          <Icon className={classes.iconMenu}>schedule</Icon>
          <ListItemText className={classes.fontStyle} primary="Acompanhar" />
        </ListItem>

        <Divider className={classes.cardDivider} />
        <ListItem
          button
          onClick={() => this.handleChangePage("tutorial", "Assistir tutorial")}
          style={{  textAlign: "center"}}
          aria-label="Assistir Tutorial"
        >
          <Icon className={classes.iconMenu}>play_circle_outline</Icon>
          <ListItemText
            className={classes.fontStyle}
            primary="Assistir Tutorial"
          />
        </ListItem>

 <Divider className={classes.cardDivider} />
        <p className={classes.styleText}>Este app é uma parceria Change.org Brasil e Minas Programam (Saiba mais)</p>
</div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Dashboard));
