import React from "react";
import {
  AboutBG,
  AboutContainer,
  ImgBG,
  AboutH1,
  AboutContent,
  InfoRow,
  Column1,
  Column2,
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
          <Column1>
            <ul type="disc">
              <AboutLi>
                Baixa metragem necessária, reduzindo custo de operação
              </AboutLi>
              <AboutLi>Baixo investimento inicial</AboutLi>
              <AboutLi>
                Mix de produtos variados que abrangem todas as horas do dia
                (almoço, lanche e jantar)
              </AboutLi>
              <AboutLi>Retorno do capital, em média, 18 meses</AboutLi>
              <AboutLi>Chance de crescimento junto à marca</AboutLi>
              <AboutLi>Foco no lucro do franqueado</AboutLi>
            </ul>
          </Column1>
          <Column2>
            <AboutH1>Principais Razões para investir</AboutH1>
          </Column2>
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
