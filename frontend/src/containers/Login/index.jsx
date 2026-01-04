import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import Logo from "../../assets/logo-kftche1.svg"

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo1-kftche"/>
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>KFTchê</span>! Acesse com seu <span>Login e Senha</span>.
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

          <Link>Esqueci minha senha.</Link>
          <Button>Entrar</Button>
        </Form>
        <Link>Não possui conta? Clique aqui!</Link>
      </RightContainer>

    </Container>
  );
}
