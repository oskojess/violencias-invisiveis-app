import * as React from "react";
import { withRouter } from "react-router";
import MainTitle from "../components/template/MainTitle";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  titleDivider: {
    height: "3px",
    backgroundColor: "#1ea896"
  },
  space: {
    height: "25px"
  },
  styledText: {
  fontFamily: "Helvetica Neue,Helvetica,Arial,Tahoma,sans-serif",
  }
});

class CreditosCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  componentDidMount() {
    document.title = "Violências Invisíveis - Tutorial";
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.styledText}>
        <MainTitle content="CRÉDITOS" />
        <div className={classes.space} />
        <p>PT-BR</p>
     
          <h1>Violências Invisíveis</h1>
        
        <h2>O que é?</h2>
        <p>
          Violências Invisíveis é um programa em que conectamos tecnologia,
          experiência em campanhas online e conteúdos sobre discriminação e
          violência para mulheres. Propomos que as mulheres – tradicionalmente
          marginalizadas pelo seu nível econômico, educativ, pelo lugar em que
          vivem e, por isso, vítimas de diferentes formas de violência e
          discriminação – acessem tecnologias e ferramentas de empoderamento
          para se converter em protagonistas de mudanças sobre os temas que as
          afetam. Os objetivos do programa são: Fomentar a iniciativa e a
          liderança das mulheres Facilitar o acesso à tecnologia por mulheres
          Prevenir a violência e a discriminação Este programa se forma a partir
          de uma parceria entre três organizações com conhecimentos e
          ferramentas complementares:  <a href="http://www.changebrasil.org/" target="_blank">
          
          <b> Change.org Brasil</b>
        
      </a>,  <a href="https://www.facebook.com/NaoKahlo/" target="_blank">
       
          <b> Não Me Kahlo</b>
       
      </a>, y <a href="http://minasprogramam.com/" target="_blank">
      
          <b> Minas Programam</b>
      
      </a>
        </p>
        <br />
      
          <h2>Contexto</h2>
        
        <p>
          O Brasil está atravessando um momento de crise, em que os direitos das
          mulheres retrocedem enquanto a violência aumenta, sobretudo entre as
          mulheres negras e aquelas com menos acesso a oportunidades e recursos.
          Apesar disso, nunca antes as mulheres se mobilizaram de forma tão
          contundente para lutar por seus direitos, tanto nas ruas como nas
          redes sociais. Sem dúvida, é uma oportunidade única para impulsionar
          mudanças que melhorem a qualidade de vida de milhares de mulheres no
          Brasil. Acreditamos que todas as mulheres podem liderar ou fazer parte
          de mudanças nos temas que as afetam, se tiverem as ferramentas
          necessários. Assim, mais que nunca, um programa como Violências
          Invisíveis é necessário.</p>
          <br />
       
            <h2>Atividades</h2>
         
          <p>Workshops Em 2018, com <a href="https://www.facebook.com/NaoKahlo/" target="_blank">Não Me Kahlo</a>, realizamos dois workshops com
          mulheres de áreas periféricas do São Paulo (Campo Limpo e Vila
          Albertina) sobre gênero, violência e como as petições online e
          tecnologia podem gerar saídas para estes problemas. Mais de 45
          mulheres participaram dos workshops, conseguiram reconhecer situações
          de violência de gênero, conheceram mais sobre campanhas e soluções
          baseadas em tecnologia e mostraram interesse em maior participação e
          iniciativa própria em situações de vulnerabilidade.
        </p>
        <br />
      
          <h2>Aplicativo</h2>
        
        <p>
          Para garantir que qualquer mulheres, para além de seu nível
          educacional e recursos, possa criar uma petição, em parceria com Minas
          Programam, criamos este aplicacão acessívelm que converte áudios em
          petições, através de uma série de perguntas guiadas por um bot. Este
          aplicativo já foi reconhecido com um prêmio do{" "}
          <a
            href="https://fundacaotidesetubal.org.br/noticias/noticia/3875/inova-zl-leva-debates-sobre-empreendedorismo-social-e-hackathon-para-a-zona-leste"
            target="_blank"
          >
            Hackathon Inova ZL
          </a>
          , promovido pelo Fundo ZL Sustentável, iniciativa da Fundação Tide
          Setúbal. Assim, o Fundo ZL Sustentável se uniu à parceria para
          desenvolver o aplicativo. Além disso, as alunas e líderes do Minas
          Programam participaram dos workshops para conhecer melhor o público
          que utilizará o aplicativo e para testar as primeiras experiências.{" "}
        </p>
        <br />
       
          <h2>Atualidade e planos futuros </h2>
       
        <p>
          Em 2018 realizamos a etapa piloto do programa, em que testamos novas
          metodologias de aprendizagem, provamos diferentes abordagens de
          mulheres que não acessam de forma orgânica a tecnologia, e
          desenvolvemos o piloto deste aplicativo. Com as principais
          aprendizagens extraídas do programa piloto, em 2019 continuaremos com
          os workshops em diferentes partes do Brasil. O aplicativo também vai
          evoluir da etapa piloto à etapa de testes e implementação.
        </p>
        <br />
        <a href="http://www.changebrasil.org/" target="_blank">
         
            <h2> Change.org Brasil</h2>
         
        </a>
        <p>
          {" "}
          Gerenciamos a maior e melhor plataforma de petições do Brasil, com
          mais de 15 milhões de brasileiros e brasileiras participando de
          mobilizações das mais diversas causas. Muitas leis de impacto nacional
          já surgiram a partir de petições, ao mesmo tempo que o impacto local
          em cidades menores é imenso – desde impedir que escolas sejam fechadas
          até garantir o tratamento digno a quem usa o SUS. Nosso trabalho é
          ajudar as pessoas a conquistar a vitória sempre.
        </p>
        <br />
        <a href="https://www.facebook.com/NaoKahlo/" target="_blank">
          <h2>Não Me Khalo</h2>
       </a>
        <p>
          {" "}
          Desde 2013 o <a href="https://www.facebook.com/NaoKahlo/" target="_blank">Não Me Kahlo</a> utiliza as redes sociais e um blog
          colaborativo como ferramentas para difundir conhecimento sobre
          questões de gênero. Em 2016, lançaram o livro #MeuAmigoSecreto:
          feminismo além das redes, com o objetivo de aprofundar a discussão que
          viralizou nas redes sociais em torno da hashtag que dá nome à obra.
          Foi em março deste ano, no entanto, que deram seu maior passo ao
          concluir com sucesso uma campanha de financiamento coletivo que
          permitiu a oficialização do grupo como uma ONG. A missão do Não Me
          Kahlo é utilizar a força da informação para promover a autonomia
          feminina.
        </p>
        <br />
        <a href="http://minasprogramam.com/" target="_blank">
                  <h2>Minas Programam</h2>
        
        </a>
        <p>
          Pensando em como a programação pode ter um papel importante nas vidas
          das mulheres, surgiu o #MinasProgramam. O projeto vem para ajudar a
          desconstruir a noção de que os homens são mais aptos a programar. E
          vamos fazer isso compartilhando conhecimentos técnicos e políticos com
          mulheres! A ideia é promover um espaço de formação básica para
          mulheres que queiram saber mais sobre programação, mas não sabem por
          onde começar.
        </p>
        <br />
        <br />
        <hr />
        <p>ES</p>
        <br />
                  <h1>Violencias Invisibles</h1>
        
        <p>
          ¿Qué es? Violencias Invisibles es un programa en el que conectamos
          tecnología, experiencia en campañas online, y contenidos sobre
          discriminación y violencia hacia las mujeres. Nos proponemos que las
          mujeres que tradicionalmente son marginalizadas por su nivel
          económico, educativo, el lugar donde viven, etc; y son víctimas de
          diferentes formas de violencia y discriminación, accedan a la
          tecnología, adquieran herramientas de empoderamiento, y se conviertan
          en protagonistas de cambios en los temas que las afectan. Los
          objetivos del programa son: fomentar la agencia y liderazgo de las
          mujeres facilitar el acceso a la tecnología a las mujeres. prevenir la
          violencia y discriminación Este programa está constituído sobre la
          alianza de tres organizaciones con conocimientos y herramientas
          diferentes y complementarios:  <a href="http://www.changebrasil.org/" target="_blank">
          
            <b> Change.org Brasil</b>
          
        </a>,  <a href="https://www.facebook.com/NaoKahlo/" target="_blank">
         
            <b> Não Me Kahlo</b>
         
        </a>, y <a href="http://minasprogramam.com/" target="_blank">
        
            <b> Minas Programam</b>
        
        </a>
        </p>
        <br />
      
          <h2>Contexto</h2>
      
        <p>
          Brasil está atravesando un momento de crisis, dónde los derechos de
          las mujeres retroceden, mientras la violencia aumenta, sobre todo en
          las mujeres negras, y aquellas con menor acceso a oportunidades y
          recursos. A pesar de este contexto, nunca antes las mujeres se
          movilizaron en forma tan contundente para reclamar sus derechos, tanto
          en las calles, como en las redes sociales. Esto, sin duda, es una
          oportunidad única para impulsar cambios que mejoren la calidad de vida
          de miles de mujeres en Brasil. Creemos que todas las mujeres pueden
          liderar o ser parte de cambios en los temas que las afectan, si se le
          dan las herramientas necesarias. Por eso, más que nunca un programa
          como Violencias Invisibles es necesario.
        </p>
        <br />
      
          <h2>Actividades</h2>
      
        <p>
          Workshops Em 2018 com  <a href="https://www.facebook.com/NaoKahlo/" target="_blank">Não Me Kahlo</a>, realizamos dois workshops com
          mulheres de áreas periféricas do São Paulo (Campo Limpo y Vila
          Albertina) sobre gênero, violência e como as petições online e
          tecnologia podem gerar saídas para estes problemas. Más de 45 mujeres
          participaron de los workshops, eles conseguiram reconhecer situações
          de violência de gênero, conocieron mais sobre campanhas e soluções
          baseadas em tecnologia e querendo ter uma maior participação e
          iniciativa própria em situações de vulnerabilidade.{" "}
        </p>
        <br />
                  <h2>Aplicativo</h2>
        
        <p>
          Para asegurarnos que cualquier mujer, más allá de su nivel de
          educación y recursos, pueda crear una petición, en parceria con Minas
          Programam, creamos una aplicación accesible que convierte audios en
          peticiones, a través de una serie de preguntas guiadas por un bot.
          Este aplicativo ya fue reconocido con un premio del{" "}
          <a
            href="https://fundacaotidesetubal.org.br/noticias/noticia/3875/inova-zl-leva-debates-sobre-empreendedorismo-social-e-hackathon-para-a-zona-leste"
            target="_blank"
          >
            "Hackathon Inova ZL"
          </a>
          , promovido por Fundo ZL Sustentável, una iniciativa de la Fundação
          Tide Setúbal. De esta manera, Fundo ZL Sustentável se unió a la
          parceria para desarrollar el aplicativo. Además miembros de Minas
          Programam participaron de los workshops para conocer mejos el público
          que utilizará el aplicativo, y testear primeras experiencias.
        </p>
        <br />
        
          <h2>Actualidad y planes futuros</h2>
       
        <p>
          En el 2018 se realizó la etapa piloto del programa, dónde testeamos
          nuevas metodologías de aprendizaje, probamos diferentes abordaje de
          mujeres que no acceden en forma orgánica a la tecnología, y
          desarrollamos el piloto del aplicativo de conversión de audio en
          peticiones. Con los principales aprendizajes extraídos del programa
          piloto, en el 2019 continuaremos con workshops en diferentes áreas de
          Brasil. También el aplicativo pasará de la etapa piloto, a la etapa de
          testeo e implementación
        </p>
        <br />
      
          <h2>
            Violencias Invisibles es parte del Programa de Mulheres e Meninas na
            América Latina
       
        </h2>
          <h3>Proposito del Programa</h3>
          <p>Incrementar el nivel de participación de las
          mujeres en los procesos de toma de decisión en todas las áreas de la
          sociedad y sistema político en igualdad de condiciones en Argentina,
          Brasil, Chile, Colombia, y México
        </p>
        <br />
        <p>Objetivos estratégicos</p>
        <ul>
          <li>Aumentar a liderança de mulheres</li>
          <li>
            Desenvolver ferramentas tecnológicas e processos para impulsionar a
            participação de mulheres
          </li>
          <li>
            Crear comunidades de mujeres de soporte mutuo y aceleración de
            impacto
          </li>
        </ul>
        <br />
        <p>
          O Programa de Mulheres e Meninas conecta mulheres na América Latina
          por meio de atividades locais e regionais.
        </p>
        <br /> <br />
        <p>
          No <b>Brasil</b> estamos propondo aumentar a liderança e participação
          de mulheres em campanhas de mudança social, especialmente aquelas que
          tradicionalmente, por questões socioeconômicas e raciais, não possuem
          representatividade nem participação em processos com quem toma as
          decisões.
        </p>
        <br />
        <a href="http://www.changebrasil.org/" target="_blank">
        
            <h2> Change.org Brasil</h2>
          
        </a>
        <p>
          {" "}
          Gerenciamos a maior e melhor plataforma de petições do Brasil, com
          mais de 15 milhões de brasileiros e brasileiras participando de
          mobilizações das mais diversas causas. Muitas leis de impacto nacional
          já surgiram a partir de petições, ao mesmo tempo que o impacto local
          em cidades menores é imenso – desde impedir que escolas sejam fechadas
          até garantir o tratamento digno a quem usa o SUS. Nosso trabalho é
          ajudar as pessoas a conquistar a vitória sempre.
        </p>
        <br />
        <a href="https://www.facebook.com/NaoKahlo/" target="_blank">
      
          <h2>Não Me Khalo</h2>
        
        </a>
        <p>
          {" "}
          Desde 2013 o Não Me Kahlo utiliza as redes sociais e um blog
          colaborativo como ferramentas para difundir conhecimento sobre
          questões de gênero. Em 2016, lançaram o livro #MeuAmigoSecreto:
          feminismo além das redes, com o objetivo de aprofundar a discussão que
          viralizou nas redes sociais em torno da hashtag que dá nome à obra.
          Foi em março deste ano, no entanto, que deram seu maior passo ao
          concluir com sucesso uma campanha de financiamento coletivo que
          permitiu a oficialização do grupo como uma ONG. A missão do Não Me
          Kahlo é utilizar a força da informação para promover a autonomia
          feminina.
        </p>
        <br />
        <a href="http://minasprogramam.com/" target="_blank">
    
          <h2>Minas Programam</h2>
       
        </a>
        <p>
          Pensando em como a programação pode ter um papel importante nas vidas
          das mulheres, surgiu o #MinasProgramam. O projeto vem para ajudar a
          desconstruir a noção de que os homens são mais aptos a programar. E
          vamos fazer isso compartilhando conhecimentos técnicos e políticos com
          mulheres! A ideia é promover um espaço de formação básica para
          mulheres que queiram saber mais sobre programação, mas não sabem por
          onde começar.
        </p>
      </div>
    );
  }
}

CreditosCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(CreditosCard));
