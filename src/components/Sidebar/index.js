import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarLinkr,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
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
          <SidebarLink to="Products" onClick={toggle}>
            Seja um franqueado
          </SidebarLink>
          <SidebarLink to="Stores" onClick={toggle}>
            Lojas
          </SidebarLink>
          <SidebarLink to="Contact" onClick={toggle}>
            Cardapio
          </SidebarLink>
          <SidebarLinkr to="/Contato" onClick={toggle}>
            Fale Conosco
          </SidebarLinkr>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
