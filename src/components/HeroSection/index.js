import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
// import {ExternalButton} from '../ButtonElement'
import {
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroContent,
  HeroH1,
  HeroP,
  // HeroBtnWrapper,
  // ArrowFoward,
  // ArrowRight
} from './HeroElements'

const HeroSection = () => {
  // const [hover, setHover] = useState(false)

  // const onHover = () => {
  //   setHover(!hover)
  // }

  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBG>
      <HeroContent>
        <HeroH1>A novidade que faltava: Combo Kids</HeroH1>
        <HeroP>
        Com brinde exclusivo!
        </HeroP>
        {/* <HeroBtnWrapper>
        <ExternalButton to="/invasaodofrango" onMouseEnter={onHover} onMouseLeave={onHover}>
            Acesse a Receita! {hover ? <ArrowFoward /> : <ArrowRight />}
          </ExternalButton>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection