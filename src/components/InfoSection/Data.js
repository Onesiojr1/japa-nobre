import about from '../../images/Hakuna.jpeg'
import Mg01 from '../../images/MapBrazil.png'
import Menu01 from '../../images/Cardapio.png'
import Menu02 from '../../images/Cardapio02.png'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Sobre Nós',
    headLine: 'O nosso lema',
    description: `O Hakuna Batata nasceu como uma barraca de batata frita em 2011. O nosso objetivo sempre foi crescer, nos apoiando em três grandes pilares: simplicidade, respeito e paixão. A medida que o Hakuna se expandiu, outros valores surgiram. Nossa equipe aumentou, direcionamos nosso foco em oferecer comida de verdade feita na hora, valorizando, sempre que possível, nossos fornecedores locais. Apoiar a comunidade e fazer o bem está em nossas raízes desde 2011. Vamos sempre acreditar que a comida pode mudar o mundo e que o Hakuna pode mudar você!`,
    buttonLabel: 'Seja um franqueado',
    imgStart: false,
    img: about,
    img2: false,
    alt: 'about01',
    dark: true,
    primary: true,
    darkText: false,
    where: "/franquia",
    redirect: true
};

export const homeObjTwo = {
    id: 'Products',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Seja um franqueado',
    headLine: 'A maior franquia de restaurantes nascida em Minas Gerais!',
    description: 'Um cardápio pensado faz toda a diferença na hora de escolher uma franquia. O Hakuna batata trabalha com produtos que vendem durante todo o tempo, ou seja, temos produtos para o dia, como pratos executivos. E para a noite temos hambúrguer artesanal, porções e batatas recheadas e porque não um burger de dia ou um prato de noite? Servimos tudo a todo tempo!! Esse diferencial, faz aumentar as chances de sucesso do negócio fazendo assim, nosso franqueado faturar nos períodos de maiores vendas, tanto de balcão quanto de delivery. Otimizando todos os horários do dia!',
    buttonLabel: 'Seja um franqueado',
    imgStart: true,
    img: Mg01,
    img2: false,
    alt: 'Minas Gerais',
    dark: false,
    primary: false,
    darkText: true,
    where: '/franquia',
    redirect: true
};

export const homeObjThree = {
    id: 'Contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Cardápio',
    headLine: '',
    description: 'Clique em "Peça já" e encontre a loja mais proxima de você!',
    buttonLabel: 'Peça já!',
    imgStart: true,
    img2: Menu01,
    img: Menu02,
    alt: 'Cardapio',
    dark: true,
    primary: true,
    darkText: false,
    where: 'Stores',
    redirect: false
};