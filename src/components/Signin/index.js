import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormWrap, FormLabel, FormH1, Form, Icon, FormText } from './SigninElements'

const SignIn = () => {

    function sendEmail(e) {

    }

  return (
    <div>
        <Container>
            <FormWrap>
                <Icon to="/">Hakuna Batata</Icon>
                <FormContent>
                    <Form action={sendEmail}>
                        <FormH1>Contato</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' name='email' required />
                        <FormLabel htmlFor='for'>Sua mensagem</FormLabel>
                        <FormText type='text' name='message' required />
                        <FormButton type='submit'>Enviar</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </div>
  )
}

export default SignIn