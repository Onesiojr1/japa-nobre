import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
  ServicesBtn,
  ServicesCard,
  ServicesBtnWrong,
} from "./ServicesElements";
import { stores } from "./stores";
import { AiFillPhone  } from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

const Services = () => {
  return (
    <ServicesContainer id="Stores">
      <ServicesH1>Nossas Lojas</ServicesH1>
      <ServicesWrapper>
        {stores.map((item, index) => {
          if (item.link === "") {
            return (
              <ServicesCard key={item.city}>
                <ServicesH2>{item.city}</ServicesH2>
                <ServicesP><MdLocationOn /> {item.address}</ServicesP>
                <ServicesP><AiFillPhone /> {item.phone}</ServicesP>
                <ServicesBtnWrong>Indisponivel</ServicesBtnWrong>
              </ServicesCard>
            );
          } else {
            return (
              <ServicesCard key={item.city}>
                <ServicesH2>{item.city}</ServicesH2>
                <ServicesP><MdLocationOn /> {item.address}</ServicesP>
                <ServicesP><AiFillPhone />{item.phone}</ServicesP>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <ServicesBtn>Peça já!</ServicesBtn>
                </a>
              </ServicesCard>
            );
          }
        })}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
