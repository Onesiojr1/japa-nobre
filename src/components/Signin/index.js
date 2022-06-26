import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import { Container, FormButton, FormContent, FormInput, FormWrap, FormLabel, FormH1, Form, Icon, FormText, Text, } from './SigninElements'

const SignIn = () => {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ib3kg3j', 'HKN_Contact', form.current, 'u5OU9-oNF2Jc5mX9E')
          .then((result) => {
            swal({
                title: 'Email enviado com sucesso!',
                text: 'Muito obrigado por nos escolher, logo logo te contactaremos',
                icon: 'success',
            })
          }, (error) => {
            swal({
                title: 'Ocorreu um erro ao enviar o formulário!',
                text: 'Tente novamente mais tarde!',
                icon: 'error',
            })
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
                        <FormH1>Abra seu coração e fale tudo pra gente ;)</FormH1>
                        <Text>Adoramos ouvir criticas e sugestões. Estamos sempre querendo melhorar e saber sua opnião é o melhor jeito.</Text>
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