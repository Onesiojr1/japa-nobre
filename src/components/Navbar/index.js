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
                <NavLogo to='/' onClick={toggleHome}><Img src={logo} alt='Japa Nobre' /></NavLogo>
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
                        <NavLinks to="Stores" smooth={true} duration={500} spy={true} exact={true} offset={-80} activeClass="active">Lojas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Contact" smooth={true} duration={500} spy={true} exact={true} offset={-80} activeClass="active">Fale Conosco</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                   <a href="https://japanobre.saipos.com" target="_blank" rel="noreferrer"><NavBtnLink>Peça Agora</NavBtnLink></a> 
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar