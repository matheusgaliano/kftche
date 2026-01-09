import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link, } from "./styles";
import Logo from "../../assets/logo-kftche1.svg"
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

import { Button } from '../../components/Button'

export function Login() {

  const navigate = useNavigate();

  const schema = yup
  .object({
    email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório.'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres!').required('Digite uma senha!'),
  })
  .required()


    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {

    try {
      await toast.promise(
        api.post('/sessions',{
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados...',
          success: 'Seja bem-vindo(a)!',
          error: 'E-mail ou Senha incorretos',
        }
      );
     setTimeout(() => {
            navigate('/')
          }, 2000); 
    } catch (error) {
      console.log('Erro ao logar!', error)
    }
  }


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
          <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
          <label>Senha</label>
          <input type="password" {...register("password")}/>
          <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type='submit'>Entrar</Button>
        </Form>
        <p>Não possui conta? <Link to='/cadastro'>Clique aqui!</Link></p>
      </RightContainer>

    </Container>
  );
}
