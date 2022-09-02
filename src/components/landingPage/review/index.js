import React from "react";
import {
  ImgBG,
  ReviewBG,
  ReviewCard,
  ReviewContainer,
  ReviewContent,
  ReviewH1,
  ReviewIcon,
  ReviewP,
  ReviewH2,
  ReviewWrap,
} from "./reviewElements";
import img from "../../../images/about-04.jpg";
import perfil from "../../../images/Pessoa1.png"
import { BtnWrap, ButtonForm } from "../about/aboutElements";
import audio from "../../../videos/Voz001.mp3"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Review = () => {
  return (
    <ReviewContainer>
      <ReviewBG>
        <ImgBG src={img} alt="BG" />
      </ReviewBG>
      <ReviewContent>
        <ReviewH1>Depoimento de quem já se apaixonou!</ReviewH1>
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
        <ReviewWrap>
            <ReviewCard>
                <ReviewIcon src={perfil} alt='BG' />
                <ReviewH2>Christine</ReviewH2>
                <ReviewP>Franqueado da cidade de Ubá</ReviewP>
                <AudioPlayer src={audio} showJumpControls={false} showFilledProgress={false} customAdditionalControls={[]} customVolumeControls={[]} />
            </ReviewCard>
        </ReviewWrap>
      </ReviewContent>
    </ReviewContainer>
  );
};

export default Review;
