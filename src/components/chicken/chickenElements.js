import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(242, 221, 143, 1) 0%,
    rgba(252, 202, 23, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  padding-bottom: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background-color: #010101;
  /* width: 400px; */
  height: auto;
  flex-direction: column;
  align-content: center;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 46px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  justify-self: center;
  width: 400px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;

  @media screen and (max-width: 480px) {
        width: 250px;
    }
`;

export const FormInput = styled.input`
justify-self: center;
  width: 400px;
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 480px) {
        width: 250px;
    }
`;

export const FormText = styled.textarea`
  width: 400px;
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
justify-self: center;
 width: 400px;
  background: #ffcc00;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
        width: 250px;
    }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const VideoBG = styled.div`
    position: relative;
    align-self: center;
    width: 960px;
    padding-bottom: 550px;
    height: 0;

    iframe{
        position: absolute;
        top: 0px;
        left: 0;
        width: 960px;
        height: 540px;
    }

    @media screen and (max-width: 480px) {
        width: 480px;
        padding-bottom: 300px;

        iframe{
        width: 480px;
        height: 270px;
    }
  }
`;
