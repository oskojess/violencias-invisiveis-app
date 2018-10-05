import * as React from "react";
import { Formik } from "formik";
import { withRouter } from "react-router";
import styled from "styled-components";

import { Title, Label, Form, Input, Button, Text } from "./Theme";

const Wrapper = styled.div`
  display:flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
`;

class Login extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Acesso</Title>
        <Formik
          initialValues={{ email: "", password: "" }}
  
          onSubmit={values => {
            console.log(values);
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
              <Label>
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
              </Label>
              <Label>
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
              </Label>
              <Button type="submit">Entrar</Button>
            </Form>
          )}
        />
      </Wrapper>
    );
  }
}

export default withRouter(Login);
