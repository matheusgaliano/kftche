import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";
import Logo from "../../assets/logo-kftche1.svg"

import { Button } from '../../components/Button'

export function Login() {

  const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required()


    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)


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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
          <label>E-mail</label>
          <input type="email" {...register("email")}/>
          </InputContainer>

          <InputContainer>
          <label>Senha</label>
          <input type="password" {...register("password")}/>
          </InputContainer>

          <Button type='submit'>Entrar</Button>
        </Form>
        <p>Não possui conta? <a>Clique aqui!</a></p>
      </RightContainer>

    </Container>
  );
}
