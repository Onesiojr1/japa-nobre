import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Container, FormButton, FormContent, FormInput, FormWrap, FormLabel, FormH1, Form, Icon, VideoBG} from './chickenElements'

const Chicken = () => {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_b1crwic', 'HKN_Contact', form.current, 'PrBTm1UBJiqPMILUn')
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
        <Icon to="/">Hakuna Batata</Icon>
            <FormWrap>
                <FormContent>
                <VideoBG>
                <iframe src="https://www.youtube.com/embed/R1EfghSqklY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoBG>
                    <Form ref={form} onSubmit={sendEmail}>
                        <FormH1>Receba essa incrivel receita por email</FormH1>
                        <FormLabel htmlFor='for'>Nome:</FormLabel>
                        <FormInput type='text' name='name' required />
                        <FormLabel htmlFor='for'>Email:</FormLabel>
                        <FormInput type='email' name='email' required />
                        <FormButton type='submit' >Enviar</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </div>
  )
}

export default Chicken