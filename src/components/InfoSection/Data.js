import about from '../../images/about-01.jpg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Sobre Nós',
    headLine: 'Hakuna Batata',
    description: `O Hakuna Batata nasceu como uma barraca de batata frita em 2011. O nosso objetivo sempre foi crescer, nos apoiando em três grandes pilares:simplicidade, respeito e paixão.A medida que o Hakuna se expandiu, outros valores surgiram. Nossa equipe aumentou, direcionamos nosso foco em oferecer comida de verdade feita na hora, valorizando, sempre que possível, nossos fornecedores locais. Apoiar a comunidade e fazer o bem está em nossas raízes desde 2011. Vamos sempre acreditar que a comida pode mudar o mundo e que o Hakuna pode mudar você!`,
    buttonLabel: 'Seja um franqueado',
    imgStart: false,
    img: about,
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
    headLine: 'A maior franquia de restaurantes nascida em Minas Gerais',
    description: 'Com mais de 30 lojas por todo o Brasil!',
    buttonLabel: 'Seja um franqueado',
    imgStart: true,
    img: require('../../images/svg2.svg').default,
    alt: 'sushi',
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
    topLine: 'Cardapio',
    headLine: '',
    description: 'Um cardápio pensado faz toda a diferença na hora de escolher uma franquia. O Hakuna batata trabalha com produtos que vendem durante todo o tempo, ou seja, temos produtos para o dia, como pratos executivos. E para a noite temos hambúrguer artesanal, porções e batatas recheadas e porque não um burger de dia ou um prato de noite? Servimos tudo a todo tempo!! Esse diferencial, faz aumentar as chances de sucesso do negócio fazendo assim, nosso franqueado faturar nos períodos de maiores vendas, tanto de balcão quanto de delivery. Otimizando todos os horários do dia!',
    buttonLabel: 'Seja um franqueado',
    imgStart: true,
    img: require('../../images/svg3.svg').default,
    alt: 'sushi',
    dark: true,
    primary: true,
    darkText: false,
    where: '/contato',
    redirect: true
};