import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Container, FormButton, FormContent, FormInput, FormWrap, FormLabel, FormH1, Form, Icon, FormText, Text } from './SigninElements'

const SignIn = () => {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ib3kg3j', 'HKN_Contact', form.current, 'u5OU9-oNF2Jc5mX9E')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset()
    }

  return (
    <div>
        <Container>
            <FormWrap>
                <Icon to="/">Hakuna Batata</Icon>
                <FormContent>
                    <Form ref={form} onSubmit={sendEmail}>
                        <FormH1>Contato</FormH1>
                        <Text>O Hakuna Batata é gerido predominantemente por franqueados, queremos saber sua opnião, critica ou sugestão! Seu contato é muito importante para nós!</Text>
                        <FormLabel htmlFor='for'>Nome:</FormLabel>
                        <FormInput type='text' name='name' required />
                        <FormLabel htmlFor='for'>Email:</FormLabel>
                        <FormInput type='email' name='email' required />
                        <FormLabel htmlFor='for'>Sua mensagem:</FormLabel>
                        <FormText type='text' name='message' required />
                        <FormButton type='submit' >Enviar</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </div>
  )
}

export default SignIn