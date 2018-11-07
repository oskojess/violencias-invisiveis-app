import * as React from "react";
import ChatBot from 'react-simple-chatbot';
import AppBar from '@material-ui/core/AppBar';
import { withRouter } from "react-router";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    display: "flex", 
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    background: "#1ea896"
  },
  icon: {
    color: "#fff",
    marginRight: "1em"
  }
};

const steps = [
  {
    id: '1',
    message: 'Olá, Jéssica! Vamos dar início a abertura da petição?! Qual será o título de seu baixo-assinado?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh diam ?',
    end: true,
  }
];

class StartPetitionCard extends React.Component {
  render(){
    const { classes, history } = this.props;
    return(
      <div>
        <AppBar position="static" className={classes.title}>
          <Toolbar>
          <Typography variant="subheading" color="inherit" className={classes.grow}>
            <Icon className={classes.icon}>stars</Icon> 
            NOVO ABAIXO-ASSINADO
          </Typography>
          <Button color="inherit" onClick={() => history.push("/dashboard")}>CANCELAR</Button>
          </Toolbar>
        </AppBar>
        <ChatBot
        headerTitle="Speech Recognition"
        recognitionEnable={true}
        recognitionLang="pt"
        hideUserAvatar="true" 
        width="100%"  
        hideHeader="true" 
        hideBotAvatar="true"
        placeholder="Digite sua mensagem aqui..."
        steps={steps}
        />
      </div>
    );
  }
}

StartPetitionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(StartPetitionCard));

