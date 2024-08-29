import './styles.scss';

import type { languages } from 'i18n/ui'
import { useTranslations } from 'i18n/utils'

type AboutMeProps = {
  url: URL
}

const AboutMe = ({ url }: AboutMeProps) => {
  const t = useTranslations(url.pathname.replaceAll('/', '') as keyof typeof languages)

  return (
    <div className='about' id='nav.me'>
      <div className='perfil'>
        <div className='perfil__photo' />
        <div className='perfil__frame' />
      </div>
      <div className='aboutme'>
        <h3 className='aboutme__title'>{t('nav.me')}</h3>
        <p className='aboutme__text'>
          { t('con.name') }
        </p>
        <p className='aboutme__text'>
          { t('con.place') }
        </p>
        <p className='aboutme__text'>
          { t('con.love') }
        </p>
        <p className='aboutme__text'>
          { t('con.freetime') }
        </p>
        <div className='details'>
          <label className='details__label'>
            { t('det.age') }:
            <span className='details__span'>27</span>
          </label>
          <label className='details__label'>
            { t('det.address') }:
            <span className='details__span'>Porto Alegre/RS</span>
          </label>
          <label className='details__label'>
            { t('det.experience') }:
            <span className='details__span'>6 { t('det.years') }</span>
          </label>
          <label className='details__label'>
            { t('det.position') }:
            <span className='details__span'>Front-end Engineer</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
