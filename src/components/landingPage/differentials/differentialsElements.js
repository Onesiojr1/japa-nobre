import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* height: 800px; */
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  /* background: #010606; */

  @media screen and (max-width: 768px) {
    /* padding-top: 200px; */
  }
`;

export const DifferentialsWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 240px;
  border-radius: 10px;
  max-height: 240px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: #ffcc00;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 5px;
`;

export const ServicesH1 = styled.h1`
  padding-top: 50px;
  font-size: 2.5rem;
  color: #ffcc00;
  margin-bottom: 32px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;


export const ServicesH3 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const ServicesP = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;