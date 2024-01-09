import './styles.scss';
import { memo } from 'react'

import Project from 'components/Project';

const Website = () => (
  <div className='website'>
    <Project
      photo='leste.png'
      title='Plataforma de investimentos website'
      technologies='React, Gatsby, Vitest, Clean Arquitecture, TypeScript, Styled-components e i18n'
    >
      Website que foi criado para uma empresa, que é uma plataforma de
      investimentos alternativos global, com um DNA brasileiro, neste website
      são mostrados todas as informções referente a empresa, a equipe que
      trabalha na empresa, como entrar em contato com os mesmos, suas
      estratégias de investimentos e em quais fundos a empresa investe. O site também é
      responsivo, o que significa que ele pode ser visualizado em dispositivos móveis e
      tablets.
    </Project>

    <Project
      invert
      title='Plataforma de gerenciamento trabalho híbrido'
      photo='deskbee.png'
      technologies='Vue, PWA, i18n, Testes, Atomic Design, CSS (BEM), TypeScript, Storybook e Quasar'
    >
      É uma plataforma de gerenciamento de espaços de trabalho e trabalho híbrido que
      ajuda empresas de todos os tamanhos a otimizar seus escritórios e melhorar a experiência de
      seus funcionários. A plataforma oferece uma ampla gama de recursos, incluindo: Reserva de
      espaços, gerenciamento de chamados, gestão de eventos, gestão de convidados, controle de
      acesso, além de uma gama de reletórios e análises que ajudam os gerentes a entender como
      os espaços de trabalho estão sendo utilizados.
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
