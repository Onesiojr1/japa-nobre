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
        <ExternalButton to="/invasaodofrango" onMouseEnter={onHover} onMouseLeave={onHover}>
            Acesse a Receita! {hover ? <ArrowFoward /> : <ArrowRight />}
          </ExternalButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection