import * as React from "react";
import { Formik } from "formik";
import { withRouter } from "react-router";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { userActions } from '../../actions/index';

import { Title, Label, Form, Input, Text } from "./Theme";

const Wrapper = styled.div`
  display:flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
`;

const styles = () => ({
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
  }
});

class Login extends React.Component {

  constructor(props){
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(values){
    console.log(values);
    this.props.sumitLogin("nathi", "123");
  }

  render() {
    const { classes } = this.props;
    return (
      <Wrapper className={classes.wrapper}>
        <Typography variant="title">Acesso</Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
  
          onSubmit={values => {
           this.submitLogin(values) 
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <Typography variant="body1" className={classes.label}>
                Email ou telefone *
                {touched.email &&
                  errors.email && <Text color="red">{errors.email}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  border={touched.email && errors.email && "1px solid red"}
                  type="text"
                  name="Email ou Telefone"
                  placeholder="Telefone ou email"
                />
              </Typography>
              <Typography variant="body1" className={classes.label}>
                Senha *
                {touched.password &&
                  errors.password && <Text color="red">{errors.password}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  border={
                    touched.password && errors.password && "1px solid red"
                  }
                  type="password"
                  name="Senha"
                  placeholder="Senha"
                />
              </Typography>
              <Button className={classes.button} type="submit">Entrar</Button>
            </Form>
          )}
        />
      </Wrapper>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
      sumitLogin: (username, password) => dispatch(userActions.login(username, password))
  };
};
  
export default connect(undefined, mapDispatchToProps)(withStyles(styles)(Login));
