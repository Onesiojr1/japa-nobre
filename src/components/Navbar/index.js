import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logo.png'
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
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'><Img src={logo} alt='Japa Nobre' /></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Sobre Nós</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Products">Seja um franqueado</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Stores">Lojas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Contact">Fale Conosco</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Entre</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar