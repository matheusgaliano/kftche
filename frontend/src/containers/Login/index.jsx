import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";
import Logo from "../../assets/logo-kftche1.svg"

import { Button } from '../../components/Button'

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo1-kftche"/>
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>KFTchê!</span> 
          <br />
          Acesse com seu <span>Login e Senha.</span>
        </Title>
        <Form>
          <InputContainer>
          <label>E-mail</label>
          <input type="email"/>
          </InputContainer>

          <InputContainer>
          <label>Senha</label>
          <input type="password"/>
          </InputContainer>

          <Button>Entrar</Button>
        </Form>
        <p>Não possui conta? <a>Clique aqui!</a></p>
      </RightContainer>

    </Container>
  );
}
