import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {ExternalButton} from '../ButtonElement'
import {
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBG>
      <HeroContent>
        <HeroH1>O Melhor da comida oriental!</HeroH1>
        <HeroP>
          Encronte as melhores promoções no link abaixo!
        </HeroP>
        <HeroBtnWrapper>
        <a href="https://japanobre.saipos.com" target="_blank" rel="noreferrer">
        <ExternalButton onMouseEnter={onHover} onMouseLeave={onHover}>
            Peça Já! {hover ? <ArrowFoward /> : <ArrowRight />}
          </ExternalButton>
          </a>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection