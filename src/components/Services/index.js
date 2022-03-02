import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/svg1.svg'
import {
    ServicesContainer,
    ServicesH1, 
    ServicesWrapper, 
    ServicesH2, 
    ServicesP, 
    ServicesIcon, 
    ServicesCard
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="Stores">
        <ServicesH1>Nossas Lojas</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Viçosa</ServicesH2>
                <ServicesP>Loja de Viçosa</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Ubá</ServicesH2>
                <ServicesP>Loja de Viçosa</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Ervalia</ServicesH2>
                <ServicesP>Loja de Viçosa</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services