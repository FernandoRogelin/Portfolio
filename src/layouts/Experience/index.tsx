import './styles.scss';

import logos from './logos.ts'

import type { languages } from 'i18n/ui'
import { useTranslations } from 'i18n/utils'

type ExperienceProps = {
  url: URL
}

const Experience = ({ url }: ExperienceProps) => {
  const t = useTranslations(url.pathname.replaceAll('/', '') as keyof typeof languages)

  return (
    <div className='experience' id='nav.experience'>
      <h1 className='services__title'>{ t('nav.experience') }</h1>

      <div className='wrapperIcons'>
        {logos.map((logo, index) => (
          <div key={index} className='logos'>
            <img
              src={logo.path}
              title={logo.title}
              className='logos__icon'
              alt={`${logo.title}-logo`}
            />
            <p className='logos__title'>{logo.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
