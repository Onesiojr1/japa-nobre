import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                   Sobre Nós 
                </SidebarLink>
                <SidebarLink to="Stores" onClick={toggle}>
                   Lojas
                </SidebarLink>
                <SidebarLink to="Products" onClick={toggle}>
                   Profutos 
                </SidebarLink>
                <SidebarLink to="Contact" onClick={toggle}>
                   Fale Conosco 
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/signin">Entre</SidebarRoute>  
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar