import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  DifferentialsWrap,
  ServicesCard,
  ServicesP,
  ServicesIcon,
} from "./differentialsElements";
import { BtnWrap, ButtonForm } from "../about/aboutElements";
import email from "../../../images/email.png"
import employees from "../../../images/employees.png"
import location from "../../../images/location.png"
import coach from "../../../images/coach.png"
import seller from "../../../images/seller.png"
import burguer from "../../../images/burguer.png"

const Numbers = () => {
  return (
    <ServicesContainer>
      <ServicesH1>
        Suporte total da franqueadora antes da inauguração:
      </ServicesH1>
      <DifferentialsWrap>
        <ServicesCard>
          <ServicesIcon src={email} alt="Marketing" />
          <ServicesP>Desenvolvimento de ações de marketing</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={employees} alt="employees" />
          <ServicesP>Número de funcionários reduzidos</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={location} alt="location" />
          <ServicesP>Análise na escolha do ponto</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={seller} alt="seller" />
          <ServicesP>Alta possibilidade de expansão</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={burguer} alt="burguer" />
          <ServicesP>
            Cardápio otimizado e feito para todas as horas do dia
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={coach} alt="coach" />
          <ServicesP>Auxílio na implantação e gestão da unidade</ServicesP>
        </ServicesCard>
      </DifferentialsWrap>
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
