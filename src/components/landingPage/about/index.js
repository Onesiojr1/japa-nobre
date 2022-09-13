import React from "react";
import {
  AboutBG,
  AboutContainer,
  ImgBG,
  AboutH1,
  AboutContent,
  InfoRow,
  AboutLi,
  BtnWrap,
  ButtonForm
} from "./aboutElements";
import img from "../../../images/about-05.jpg";

const About = () => {
  return (
    <AboutContainer>
      <AboutBG>
        <ImgBG src={img} alt="BG" />
      </AboutBG>
      <AboutContent>
        <AboutH1>Principais Razões para investir</AboutH1>
        <InfoRow>
            <ul type="disc">
              <AboutLi>
                Baixo custo de operação
              </AboutLi>
              <AboutLi>
                Mix de produtos variados que abrangem todas as horas do dia
                (almoço, lanche e jantar)
              </AboutLi>
              <AboutLi>Retorno do capital, em média, 24 meses</AboutLi>
              <AboutLi>Chance de crescimento junto à marca</AboutLi>
              <AboutLi>Foco no lucro do franqueado</AboutLi>
            </ul>
        </InfoRow>
        <BtnWrap>
          <ButtonForm
            to='FormSection'
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={true ? 1 : 0}
            dark={true ? 1 : 0}
            dark2={true ? 1 : 0}
          >
            {'RECEBA A APRESENTAÇÃO PELO WHATSAPP'}
          </ButtonForm>
        </BtnWrap>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
