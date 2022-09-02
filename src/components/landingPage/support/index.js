import React from "react";
import {
  Column1,
  InfoRow,
  SupportContainer,
  SupportH1,
  Column2,
  SupportLi,
  SupportContent,
} from "./supportElements";
import { BtnWrap, ButtonForm } from "../about/aboutElements";
import {BsCheckLg} from 'react-icons/bs'

const Support = () => {
  return (
    <SupportContainer>
        <SupportContent>
      <InfoRow>
        <Column1>
        <SupportH1>Todo suporte por nossa conta!</SupportH1>
          <ul type="none">
            <SupportLi>
              É nos detalhes que se faz a diferença, e o suporte que o Hakuna dá
              para seus franqueados traz muito mais tranquilidade e resultados.
            </SupportLi>
          </ul>
          <BtnWrap>
            <ButtonForm
              to="FormSection"
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={true ? 1 : 0}
              dark={true ? 1 : 0}
              dark2={true ? 1 : 0}
            >
              {"RECEBA A APRESENTAÇÃO PELO WHATSAPP"}
            </ButtonForm>
          </BtnWrap>
        </Column1>
        <Column2>
        <ul type="none">
            <SupportLi><BsCheckLg fontSize={20}/> Treinamento de equipe</SupportLi>
            <SupportLi><BsCheckLg fontSize={20}/> Estudo da região</SupportLi>
            <SupportLi><BsCheckLg fontSize={20}/> Orientação para abertura da empresa </SupportLi>
            <SupportLi><BsCheckLg fontSize={20}/> Projeto arquitetônico</SupportLi>
            <SupportLi><BsCheckLg fontSize={20}/> Suporte para escolha de ponto</SupportLi>
            <SupportLi><BsCheckLg fontSize={20}/> Suporte na contratação da equipe </SupportLi>
            <SupportLi><BsCheckLg fontSize={20}/> Treinamento de gestão</SupportLi>
        </ul>
        </Column2>
      </InfoRow>
      </SupportContent>
    </SupportContainer>
  );
};

export default Support;
