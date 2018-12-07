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
    background: "#ED2D23"
  },
  icon: {
    color: "#fff",
    marginRight: "1em"
  }
};

const theme = {
  background: '#fff',
  fontFamily: 'Roboto',
  botBubbleColor: '#737273',
  botFontColor: '#fff'
};

const steps = [
  {
    id: '1',
    message: `
      Olá, Jéssica! Vou te ajudar a fazer sua petição.
    `,
    trigger: '2',
  },
  {
    id: '2',
    message: `
      O título do abaixo-assinado é a primeira coisa que as pessoas vão ver. 
      Precisa ser curto, focado e direto ao ponto. 
      Vou te dar um exemplo de petições reais: “Quero psicólogos nas Delegacias da Mulher do Estado de São Paulo”. 
      Ou outro exemplo: “Quero iluminação nos escadões da Vila Albertina”
    `,
    trigger: '3',
  },
  {
    id: '3',
    message: `
      Entendeu? Agora pense um pouquinho e diga em poucas palavras: O que você quer mudar? 
      O que você gostaria que fosse diferente?
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
      Agora precisamos pensar quem é que pode resolver esse problema. 
      É a prefeitura? É o dono de uma empresa? É o diretor de uma escola? Nem tudo passa pelos poderosos. 
      Às vezes as decisões estão mais perto do que parecem.`,
    trigger: '6',
  },
  {
    id: '6',
    message: `
      Pense mais um pouquinho e me responda: quem é a pessoa, organização ou empresa que pode resolver o seu problema?
    `,
    trigger: '7'
  },
  {
    id: '7',
    user: true,
    trigger: '8',
  },
  {
    id: '8',
    message: `
      Boa! Logo mais o {previousValue} vai começar a receber pressão. 
      Cada pessoa que assinar sua petição vai enviar um email automático para ele. Imagina!
    `,
    trigger: '9'
  },
  {
    id: '9',
    message: `
      Bom, agora é hora de explicar um pouquinho melhor como sua ideia vai fazer bem pra você e pra sua comunidade. 
      Explica rapidinho pra mim quem é você e porque esse problema é urgente.
    `,
    trigger: '10'
  },
  {
    id: '10',
    user: true,
    trigger: '11'
  },
  {
    id: '11',
    message: `
      Incrível! Sua petição está pronta no link xxxxx. 
      Agora é chamar seus amigos para assinar. 
      Clique abaixo para compartilhar no Whatsapp ou no Facebook.
    `,
    trigger: '12'
  },
  {
    id: '12',
    component: (
      <a 
        style={{display: "flex", alignItems: "center", width: "100%", textDecoration: "none", justifyContent: "center", color: "#25d366"}} 
        href="https://wa.me/whatsappphonenumber/?text=https://www.change.org/">
        <img style={{width: "30px", height: "30px", paddingRight: "1em"}} src="/src/images/whatsappLogo.png"></img>
        Compartilhar no Whatsapp
      </a>
    ),
    trigger: '13'
  },
  {
    id: '13',
    component: (
      <a 
        style={{display: "flex", alignItems: "center", width: "100%", textDecoration: "none", justifyContent: "center", color: "#3b5998"}} 
        href="https://www.facebook.com/sharer/sharer.php?u=https://www.change.org/" target="_blank">
        <img style={{width: "30px", height: "30px", paddingRight: "1em"}} src="/src/images/facebookLogo.png"></img>
        Compartilhar no Facebook
      </a>
    ),
    end: true
  }
];

class StartPetitionCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cancelOption: true
    };
    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd() {
    this.setState({cancelOption: false});
  }

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
          {
            this.state.cancelOption === true
            &&
            <Button color="inherit" onClick={() => history.push("/dashboard")}>CANCELAR</Button>
          }
          </Toolbar>
        </AppBar>
        <ThemeProvider theme={theme}>
          <ChatBot
          headerTitle="Speech Recognition"
          handleEnd={this.handleEnd}  
          speechSynthesis={{ enable: true, lang: 'pt-BR' }}
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

