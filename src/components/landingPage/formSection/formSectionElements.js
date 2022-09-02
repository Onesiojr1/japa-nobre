import styled from "styled-components"
import { Link } from "react-router-dom";

export const FormSectionContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    /* height: 600px; */
    position: relative;
    z-index: 1;

    :before {
       content: '';
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background: linear-gradient(
           180deg,
           rgba(0,0,0,0.4) 0%,
           rgba(0,0,0,0.8) 100%
           ),
           linear-gradient(
           180deg,
           rgba(0,0,0,0.2) 0%,
           transparent 100%
           );
       z-index: 2;
   }
`

export const FormSectionBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBG = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const FormSectionContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    /* position: absolute; */
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FormSectionH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 0;
  grid-area: col2;
`;

export const FormContent = styled.div`
  /* height: 800px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background-color: #010101;
  /* height: 800px; */
  width: min-content;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 22px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 530px) {
    padding: 32px 32px;
    width: 400px;
    /* grid-template-columns: repeat(auto-fit, minmax(260px, auto)); */
  }

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    width: 300px;
    /* grid-template-columns: repeat(auto-fit, minmax(260px, auto)); */
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 12px 12px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormText = styled.textarea`
  padding: 12px 12px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormSelect = styled.select`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #ffcc00;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;


export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin: 8px;
  }
`;

export const FormWrap = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;