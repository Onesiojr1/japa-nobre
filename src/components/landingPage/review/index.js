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
import perfil1 from "../../../images/Pessoa1.png"
import perfil2 from "../../../images/Pessoa2.png"
import perfil3 from "../../../images/Pessoa3.png"
import { BtnWrap, ButtonForm } from "../about/aboutElements";
import audio1 from "../../../videos/vasquinho.mp3"
import audio2 from "../../../videos/thais.mp3"
import audio3 from "../../../videos/claudia.mp3"
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
                <ReviewIcon src={perfil1} alt='BG' />
                <ReviewH2>vasquinho</ReviewH2>
                <ReviewP>Franqueado da cidade de Muriaé</ReviewP>
                <AudioPlayer src={audio1} showJumpControls={false} showFilledProgress={false} customAdditionalControls={[]} customVolumeControls={[]} />
            </ReviewCard>
            <ReviewCard>
                <ReviewIcon src={perfil2} alt='BG' />
                <ReviewH2>Thais</ReviewH2>
                <ReviewP>Franqueada da cidade de Cataguases</ReviewP>
                <AudioPlayer src={audio2} showJumpControls={false} showFilledProgress={false} customAdditionalControls={[]} customVolumeControls={[]} />
            </ReviewCard>
            <ReviewCard>
                <ReviewIcon src={perfil3} alt='BG' />
                <ReviewH2>Cláudia</ReviewH2>
                <ReviewP>Franqueada da cidade de Bom Despacho</ReviewP>
                <AudioPlayer src={audio3} showJumpControls={false} showFilledProgress={false} customAdditionalControls={[]} customVolumeControls={[]} />
            </ReviewCard>
        </ReviewWrap>
      </ReviewContent>
    </ReviewContainer>
  );
};

export default Review;
