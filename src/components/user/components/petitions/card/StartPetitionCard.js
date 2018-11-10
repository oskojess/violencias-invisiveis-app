import * as React from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
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

const theme = {
  background: '#fff',
  fontFamily: 'Roboto',
  botBubbleColor: 'rgba(0, 0, 0, 0.26)',
  botFontColor: '#fff'
};

const steps = [
  {
    id: '1',
    message: `
          Olá, Jéssica! Vamos dar início a abertura da petição?! 
          Escreva o título do abaixo-assinado 
          É a primeira coisa que as pessoas vão ver. Por isso capriche! :) 
          Faça um título curto focado no que você quer que seja diferente.
    `,
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: `
          Quem é a pessoa, organização ou empresa que pode resolver o seu problema? 
          Eles vão receber emails sobre o abaixo-assinado pedindo uma resposta.
    `,
    trigger: '4'
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: `
      Explique o problema que você quer resolver!
      As pessoas apoiam mais quando você conta uma história pessoal. 
      Explique como sua ideia vai ser fazer bem pra você, sua família ou comunidade.
    `,
    trigger: '6'
  },
  {
    id: '6',
    user: true,
    trigger: '7'
  },
  {
    id: '7',
    message: `
      Obrigada, abaixo assinado criado com sucesso!
    `,
  },
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
        <ThemeProvider theme={theme}>
          <ChatBot
          headerTitle="Speech Recognition"
          speechSynthesis={{ enable: true, lang: 'pt' }}
          style={{ "rsc-container": { borderRadius: "0px 10px 0px 10px"} }}
          recognitionEnable={true}
          recognitionLang="pt"
          hideUserAvatar="true" 
          width="100%"  
          hideHeader="true" 
          hideBotAvatar="true"
          placeholder="Digite sua mensagem aqui..."
          steps={steps}
          />
        </ThemeProvider>
      </div>
    );
  }
}

StartPetitionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(StartPetitionCard));

