import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
        "service_b1crwic",
        "HKN_Franquia",
        form.current,
        "PrBTm1UBJiqPMILUn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
              <FormInput type="text" name="name" required />
              <FormLabel htmlFor="for"> Qual seu Capital Disponivel:</FormLabel> 
              <FormSelect name="value">
                <option value="200">Tenho os R$200Mil para iniciar o Negócio</option>
                <option value="100">Consigo os R$200Mil para iniciar o negócio</option>
                <option value="300">Tenho ou consigo mais de R$250Mil para iniciar o Negocio</option>
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
