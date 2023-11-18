import './styles.scss';
import { memo } from 'react'

import Project from 'components/Project';

const Website = () => (
  <div className='website'>
    <Project
      photo='leste.png'
      title='Site Leste'
      technologies='React, Gatsby, Vitest, Clean Arquitecture, TypeScript, Styled-components e i18n'
    >
      Website que foi criado para a empresa Leste, que é uma plataforma de
      investimentos alternativos global, com um DNA brasileiro, neste website
      são mostrados todas as informções referente a empresa, a equipe que
      trabalha na empresa, como entrar em contato com os mesmos, suas
      estratégias de investimentos e em quais fundos a empresa investe. A empresa
      possue sede em várias regiões pelo mundo, como Miami, Nova Iorque, Rio de Janeiro,
      São Paulo e Bogotá.
    </Project>

    <Project
      invert
      title='Deskbee'
      photo='deskbee.png'
      technologies='Vue, PWA, i18n, Testes, Atomic Design, CSS (BEM), TypeScript, Storybook e Quasar'
    >
      Uma plataforma para os colaboradores de uma empresa que está trabalhando atualmente
      como híbrido, consigam fazer suas reservas de lugares no prédio em que trabalham quando
      precisam ir presencial, assim os colaboradores sabem quando forem para a empresa
      quantos lugares ainda tem disponíveis para serem usados. A plataforma é um PWA, então
      pode ser acessada através de uma URL no browser e transformar ela em um aplicativo no seu
      celular.
    </Project>

    <Project
      photo='portfolio.png'
      title='Fernando Portfolio'
      technologies='Astro, React, TypeScript, CSS (BEM) e i18n'
    >
      O website que mostra uma coleção dos melhores trabalhos feitos por mim mesmo,
      o mesmo mostra uma compilação de amostras de serviços ou produtos, projetos
      profissionais e outras conquistas, servindo para exibir as habilidades e o estilo
      de trabalho que eu possuo, também tem como entrar em contato comigo. Este website
      contém uma seleção dos trabalhos mais relevantes que eu trabalhei na minha carreira
      como desenvolvedor.
    </Project>
  </div>
)


export default memo(Website)
