import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Saiba Mais</FooterLinkTitle>
                            <FooterLink to='/signin'>Entre</FooterLink>
                            <FooterLink to='/signin'>Sobre Nós</FooterLink>
                            <FooterLink to='/signin'>Seja um franqueado</FooterLink>
                            <FooterLink to='/signin'>Lojas</FooterLink>
                            <FooterLink to='/signin'>Fale Conosco</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Saiba Mais</FooterLinkTitle>
                            <FooterLink to='/signin'>Entre</FooterLink>
                            <FooterLink to='/signin'>Sobre Nós</FooterLink>
                            <FooterLink to='/signin'>Seja um franqueado</FooterLink>
                            <FooterLink to='/signin'>Lojas</FooterLink>
                            <FooterLink to='/signin'>Fale Conosco</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='' >
                            Japa Nobre
                        </SocialLogo>
                        <WebsiteRights>Jaoa Nobre ©{new Date().getFullYear()} Todos os direitos reservados</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/JAPANOBRE/" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/japanobre/" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer