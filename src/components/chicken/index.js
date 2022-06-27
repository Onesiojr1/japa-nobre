import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import { Container, FormButton, FormContent, FormInput, FormWrap, FormLabel, FormH1, Form, Icon, VideoBG } from './chickenElements'

const Chicken = () => {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_b1crwic', 'HKN_Contact', form.current, 'PrBTm1UBJiqPMILUn')
            .then((result) => {
                swal({
                    title: 'Receita enviada com sucesso!',
                    text: 'Acesse seu email e experimente essa delícia!',
                    icon: 'success',
                })
            }, (error) => {
                swal({
                    title: 'Ocorreu um erro ao enviar o formulário!',
                    text: 'Tente novamente mais tarde.',
                    icon: 'error',
                })
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
                            <FormLabel htmlFor='for'>Melhor Email para receber:</FormLabel>
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