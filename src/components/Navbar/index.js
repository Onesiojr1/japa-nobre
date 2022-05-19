import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logo.png'
import { animateScroll as scroll } from 'react-scroll/modules'
import {
    Nav,
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLinkr,
    NavBtn,
    NavBtnLink,
    Img
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 100) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}><Img src={logo} alt='Hakuna Batata' /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80} activeClass="active">Sobre Nós</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Products" smooth={true} duration={500} spy={true} exact={true} offset={-80} activeClass="active">Seja um franqueado</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Contact" smooth={true} duration={500} spy={true} exact={true} offset={-80} activeClass="active">Cardapio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinkr to="/contato" smooth={true} duration={500} spy={true} exact={true} offset={-80} activeClass="active">Fale Conosco</NavLinkr>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavLinks to="Stores" smooth={true} duration={500} spy={true} exact={true} offset={-80} activeClass="active"><NavBtnLink>Peça já</NavBtnLink></NavLinks>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar