import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import {
  Container,
  FormButton,
  FormContent,
  FormInput,
  FormWrap,
  FormLabel,
  FormH1,
  Form,
  Icon,
  FormSelect,
} from "./franchiseElements";

const Franchise = () => {
  const form = useRef();

  function emailClient(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ib3kg3j",
        "HKN_Fran",
        form.current,
        "u5OU9-oNF2Jc5mX9E"
      )
      .then(
        (result) => {
          swal({
            title: 'Email enviado com sucesso!',
            text: 'Muito obrigado por nos escolher, logo logo te contactaremos',
            icon: 'success',
        })
        },
        (error) => {
          swal({
            title: 'Ocorreu um erro ao enviar o formulário!',
            text: 'Tente novamente mais tarde!',
            icon: 'error',
        })
        }
      );

    e.target.reset();
  }

  function sendEmail(e) {
    emailClient(e)
  }

  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">Hakuna Batata</Icon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>Seja nosso franqueado</FormH1>
              <FormLabel htmlFor="for">Nome:</FormLabel>
              <FormInput type="text" name="name" required />
              <FormLabel htmlFor="for">Email:</FormLabel>
              <FormInput type="email" name="email" required />
              <FormLabel htmlFor="for">Seu Telefone</FormLabel>
              <FormInput type="number" name="phone" required />
              <FormLabel htmlFor="for">Cidade de Interesse:</FormLabel>
              <FormInput type="text" name="city" required />
              <FormLabel htmlFor="for"> Qual seu Capital Disponivel:</FormLabel> 
              <FormSelect name="value">
                <option value="Tenho os R$200mil">Tenho os R$200Mil para iniciar o Negócio</option>
                <option value="Consigo os R$200mil">Consigo os R$200Mil para iniciar o negócio</option>
                <option value="Tenho ou consigo mais de R$250mil">Tenho ou consigo mais de R$250Mil para iniciar o Negocio</option>
              </FormSelect>
          
              <FormButton type="submit">Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};

export default Franchise;
