import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { userActions } from '../../actions/login';
import { alertActions } from '../../actions/alert';

import { Title, Label, Form, Input, Text } from "./Theme";

const Wrapper = styled.div`
  display:flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
`;

const styles = theme => ({
  button: {
    borderRadius: "20px",
    padding: "8px 35px",
    color: "#fff",
    backgroundColor: "#1ea896",
    '&:hover': {
      backgroundColor: '#20b5a1'
    }
  },
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  label: {
    color: "#777",
    fontSize: "0.8em",
    margin: "1em auto"
  },
  placeholder: {
    height: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      vertical: 'top',
      horizontal: 'center',
    };
  }

  submitLogin(e) {
    e.preventDefault();
    const values = {
      email: e.target.email.value,
      password: e.target.senha.value
    };
    this.props.sumitLogin(values, this.props.history);
  }

  handleClose() {
    this.props.closeAlert();
  };

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { classes, alert, login } = this.props;

    return (
      <Wrapper className={classes.wrapper}>
        <Typography variant="title">Acesso</Typography>
        <Form onSubmit={this.submitLogin}>
          <Typography variant="body1" className={classes.label}>
            Email ou telefone *
          <Input
              onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="Telefone ou email"
            />
          </Typography>
          <Typography variant="body1" className={classes.label}>
            Senha *
          <Input
              onChange={this.handleChange}
              type="password"
              name="senha"
              placeholder="Senha"
            />
          </Typography>
          <Button className={classes.button} disabled={login.loading} type="submit">Entrar</Button>
        </Form>
        <Snackbar
          open={alert.showMessage}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id" aria-label={alert.message}>{alert.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Fechar"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <div className={classes.placeholder}>
          <Fade
            in={login.loading}
            style={{
              transitionDelay: login.loading ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
          {
            login.loading
            &&
            <Typography>Carregando!</Typography>}
        </div>
      </Wrapper>
    )
  }

}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { alert, login } = state;
  return {
    alert,
    login
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sumitLogin: (user, history) => dispatch(userActions.login(user, history)),
    closeAlert: () => dispatch(alertActions.clear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
