import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Japa Nobre</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Sobre Nós</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Stores">Lojas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Products">Produtos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Contact">Fale Cosco</NavLinks>
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