import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome eh obrigatorio'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('O email e obrigatorio'),
  password: Yup.string()
    .min(6, 'A senha precisa de 6 caracteres')
    .required('A senha eh obrigatoria'),
});

export default function Signup() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
