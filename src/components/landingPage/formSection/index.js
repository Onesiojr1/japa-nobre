import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import logoImg from "../../../images/logo.png";
import {
  FormSectionContainer,
  FormSectionBG,
  ImgBG,
  FormSectionContent,
  FormSectionH1,
  InfoRow,
  Column1,
  Column2,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Icon,
  FormWrap,
  Logo
} from "./formSectionElements";
import img from "../../../images/about-03.jpg";

const FormSection = () => {
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
        (_result) => {
          swal({
            title: "Email enviado com sucesso!",
            text: "Em breve, um de nosso consultores entrará em contato com todas as informações!",
            icon: "success",
          });
        },
        (_error) => {
          swal({
            title: "Ocorreu um erro ao enviar o formulário",
            text: "Tente novamente mais tarde.",
            icon: "error",
          });
        }
      );

    e.target.reset();
  }

  function sendEmail(e) {
    emailClient(e);
  }

  return (
    <FormSectionContainer id="FormSection">
      <FormSectionBG>
        <ImgBG src={img} alt="BG" />
      </FormSectionBG>
      <FormSectionContent>
        <Icon to="/"><Logo src={logoImg} alt="Hakuna Batata"/></Icon>
        <InfoRow>
          <Column1>
            <FormSectionH1>
              Seja um franqueado da maior rede de franquias de restaurante
              nascida em minas
            </FormSectionH1>
          </Column1>
          <Column2>
            <FormWrap>
              <FormContent>
                <Form ref={form} onSubmit={sendEmail}>
                  <FormH1>Saiba como ser um franquado Hakuna Batata</FormH1>
                  <FormLabel htmlFor="for">Nome:</FormLabel>
                  <FormInput type="text" name="name" required />
                  <FormLabel htmlFor="for">Seu Telefone</FormLabel>
                  <FormInput type="number" name="phone" required />
                  <FormLabel htmlFor="for">Cidade de Interesse:</FormLabel>
                  <FormInput type="text" name="city" required />
                  <FormButton type="submit">Enviar</FormButton>
                </Form>
              </FormContent>
            </FormWrap>
          </Column2>
        </InfoRow>
      </FormSectionContent>
    </FormSectionContainer>
  );
};

export default FormSection;