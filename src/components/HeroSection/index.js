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
        <HeroH1>A INVASÃO DO FRANGO</HeroH1>
        <HeroP>
          Uma receita nada secreta!
        </HeroP>
        <HeroBtnWrapper>
        <a href="/invasaodofrango" target="_blank" rel="noreferrer">
        <ExternalButton onMouseEnter={onHover} onMouseLeave={onHover}>
            Saiba mais! {hover ? <ArrowFoward /> : <ArrowRight />}
          </ExternalButton>
          </a>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection