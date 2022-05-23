import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  BtnLink,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  where,
  redirect,
  img2,
}) => {
  if (window.innerWidth > 500) {
    const imgTrue = img;
    if (redirect === false) {
      return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Column1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      <Button
                        to={where}
                        smooth="true"
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={imgTrue} alt={alt} />
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </>
      );
    } else {
      return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Column1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      <BtnLink
                        to={where}
                        smooth="true"
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </BtnLink>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={img} alt={alt} />
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </>
      );
    }
  } else {
    const imgTrue = img2;
    if (redirect === false) {
      return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Column1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      <Button
                        to={where}
                        smooth="true"
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </Button>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={imgTrue} alt={alt} />
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </>
      );
    } else {
      return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                <Column1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      <BtnLink
                        to={where}
                        smooth="true"
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                      >
                        {buttonLabel}
                      </BtnLink>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={img} alt={alt} />
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </>
      );
    }
  }
};

export default InfoSection;
