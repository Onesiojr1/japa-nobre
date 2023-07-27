import React, {useState, useEffect} from 'react'
import Video from '../../videos/video3.mp4'
import VideoMobile from '../../videos/video3Mobile.mp4'
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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    checkResize()
    window.addEventListener('resize', checkResize)
  }, []);

  const checkResize = () => {
    setIsMobile(window.innerWidth > 850)
  }
  // const [hover, setHover] = useState(false)

  // const onHover = () => {
  //   setHover(!hover)
  // }

  return (
    <HeroContainer>
      <HeroBG>{
        isMobile 
          ? <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
          : <VideoBG autoPlay loop muted src={VideoMobile} type='video/mp4' />
      }
      </HeroBG>
      <HeroContent>
        <HeroH1>EXPERIMENTE!</HeroH1>
        {/* <HeroP>
          A exclusiva maionese do Hakuna!
        </HeroP> */}
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