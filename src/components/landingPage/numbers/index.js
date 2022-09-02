import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesH3,
  ServicesP,
} from "./numbersElements";
import { BtnWrap, ButtonForm } from "../about/aboutElements";

const Numbers = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Quais são os números da franquia?</ServicesH1>
      <ServicesH3>Acompanhe os principais indicadores financeiros do Hakuna Batata</ServicesH3>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>24 Meses</ServicesH2>
          <ServicesP>Retorno do investimento de 12 à 24 meses</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>60 dias</ServicesH2>
          <ServicesP>
            Tempo médio de implantação, a depender do ponto comercial{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>R$220 mil</ServicesH2>
          <ServicesP>Potencial de faturamento de até de 220 mil/mês</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Até 20%</ServicesH2>
          <ServicesP>Margem de lucro entre 10% a 20%</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
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
    </ServicesContainer>
  );
};

export default Numbers;
