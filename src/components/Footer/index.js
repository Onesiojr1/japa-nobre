import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok  } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
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
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='' >
                            Hakuna Batata
                        </SocialLogo>
                        <WebsiteRights>Hakuna Batata ©{new Date().getFullYear()} Todos os direitos reservados</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/hakunabatataoficial/" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/hakunabatataoficial/" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.tiktok.com/@hakuna.batata.oficial" target="_blank" arial-label="Facebook">
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