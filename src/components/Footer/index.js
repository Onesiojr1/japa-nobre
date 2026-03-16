import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok  } from 'react-icons/fa'
import logo from '../../images/logo.png'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='' >
                            Hakuna Batata
                        </SocialLogo>
                        <WebsiteRights>Directa Franquias {new Date().getFullYear()} CNPJ: 21.815.019/0001-66 Todos os direitos reservados</WebsiteRights>
                        <FooterLink to='/politica-de-privacidade'>Política de Privacidade</FooterLink>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/hakunabatataoficial/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/hakunabatataoficial/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.tiktok.com/@hakuna.batata.oficial" target="_blank" aria-label="Tiktok">
                                <FaTiktok/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer