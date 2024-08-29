import './styles.scss';
import { memo } from 'react'

import type { languages } from 'i18n/ui'
import { useTranslations } from 'i18n/utils'

import Project from 'components/Project'
import LestePhoto from '/src/assets/images/leste.png'
import DeskbeePhoto from '/src/assets/images/deskbee.png'
import PortfolioPhoto from '/src/assets/images/portfolio.png'


type WebsiteProps = {
  url: URL
}

const Website = ({ url }: WebsiteProps) => {
  const t = useTranslations(url.pathname.replaceAll('/', '') as keyof typeof languages)

  return (
    <div className='website'>
      <Project
        photo={LestePhoto.src}
        title='Plataforma de investimentos website'
        technologies='React, Gatsby, Vitest, Clean Arquitecture, TypeScript, Styled-components, i18n'
      >
        { t('leste.text') }
      </Project>

      <Project
        invert
        photo={DeskbeePhoto.src}
        title='Plataforma de gerenciamento trabalho híbrido'
        technologies='Vue, PWA, i18n, Testes, Atomic Design, CSS (BEM), TypeScript, Storybook, Quasar'
      >
        { t('deskbee.text') }
      </Project>

      <Project
        photo={PortfolioPhoto.src}
        title='Fernando Portfolio'
        technologies='Astro, React, TypeScript, CSS (BEM), i18n'
      >
        { t('fernando.portfolio') }
      </Project>
    </div>
  )
}


export default memo(Website)
