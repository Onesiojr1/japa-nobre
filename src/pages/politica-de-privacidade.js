import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const PoliticaDePrivacidadePage = () => {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", fontFamily: "sans-serif" }}>
      <div
        style={{
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101522",
          padding: "12px 16px",
          borderRadius: 12,
        }}
      >
        <Link to='/' style={{ display: "inline-flex", alignItems: "center" }}>
          <img src={logo} alt='Hakuna Batata' style={{ height: 40, width: "auto" }} />
        </Link>
      </div>
      <h1>Política de Privacidade – Hakuna Batata</h1>
      <p>
        No Hakuna Batata, acreditamos que a alimentação é um dos pilares mais importantes da vida humana. Nossa visão de
        futuro é entregar alimentos naturalmente gostosos, que façam bem ao organismo e ajudem de fato na saúde das
        pessoas. Para honrar essa preocupação com o que servimos, tratamos os seus dados pessoais com o mesmo rigor e
        transparência que dedicamos à nossa cozinha.
      </p>

      <h2>1. Coleta de Informações</h2>
      <p>Coletamos informações para melhorar sua experiência conosco e garantir que nossas opções saudáveis cheguem até você:</p>
      <p>
        <strong>Dados Fornecidos por Você:</strong> Nome, e-mail e telefone fornecidos em formulários de contato, pedidos
        de delivery ou cadastro de fidelidade.
      </p>
      <p>
        <strong>Dados de Navegação (Meta Pixel e Cookies):</strong> Utilizamos tecnologias para entender como você
        interage com nosso site. Isso inclui seu endereço IP, tipo de navegador e páginas visitadas. Esses dados são
        essenciais para nossas campanhas no Business Manager da Meta.
      </p>

      <h2>2. Finalidade do Tratamento de Dados</h2>
      <p>Seus dados não são apenas números; eles nos ajudam a cumprir nossa missão:</p>
      <p>
        <strong>Personalização:</strong> Oferecer sugestões do Chef e pratos executivos que se alinhem ao seu estilo de
        vida saudável.
      </p>
      <p>
        <strong>Comunicação:</strong> Enviar atualizações sobre nosso cardápio de rótulo limpo (clean label) e promoções
        exclusivas.
      </p>
      <p>
        <strong>Publicidade Direcionada:</strong> Usamos os dados para mostrar anúncios relevantes nas plataformas da Meta
        (Facebook e Instagram), garantindo que você receba informações sobre alimentos que de fato beneficiam seu
        organismo.
      </p>

      <h2>3. Compartilhamento de Dados</h2>
      <p>O Hakuna Batata não vende seus dados pessoais. Compartilhamos informações apenas com parceiros estritamente necessários:</p>
      <p>
        <strong>Provedores de Tecnologia:</strong> Plataformas de delivery e sistemas de autoatendimento.
      </p>
      <p>
        <strong>Plataformas de Marketing (Meta):</strong> Para a execução de anúncios personalizados através do Pixel de
        rastreamento.
      </p>

      <h2>4. Segurança e Retenção</h2>
      <p>
        Implementamos medidas de segurança para proteger suas informações contra acessos não autorizados. Seus dados são
        mantidos apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido
        por lei.
      </p>

      <h2>5. Seus Direitos (LGPD)</h2>
      <p>Você tem total controle sobre seus dados. A qualquer momento, você pode solicitar:</p>
      <p>A confirmação da existência de tratamento de dados.</p>
      <p>O acesso, correção ou exclusão de seus dados pessoais de nossa base.</p>
      <p>A revogação do consentimento para comunicações de marketing.</p>

      <h2>6. Alterações nesta Política</h2>
      <p>
        Reservamo-nos o direito de atualizar esta Política de Privacidade sempre que nossa operação ou o cardápio
        evoluírem para servir você ainda melhor.
      </p>

      <h2>Contato de Privacidade:</h2>
      <p>
        Para dúvidas sobre como tratamos seus dados, entre em contato através do e-mail: {" "}
        <a href="mailto:faleconosco@hakunabatata.com.br">faleconosco@hakunabatata.com.br</a>
      </p>
    </div>
  );
};

export default PoliticaDePrivacidadePage;
