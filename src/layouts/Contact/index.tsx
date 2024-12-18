import './styles.scss'

import links from './links'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineMail } from 'react-icons/md'
import Logo from '../../assets/images/logo-preview.png'

import type { languages } from 'i18n/ui'
import { useTranslations } from 'i18n/utils'

type ContactProps = {
  url: URL
}

const Contact = ({ url }: ContactProps) => {
  const t = useTranslations(url.pathname.replaceAll('/', '') as keyof typeof languages)

  return (
    <div className="wrapperContact" id="nav.contact">
      <div className="contact">
        <h1 className="contact__title">{t('nav.contact')}</h1>

        <h2 className="contact__drop">{t('con.message')}</h2>
        <p className="contact__text">{t('con.info')}</p>

        <div>
          <div className="info">
            <div className="info__icon">
              <MdOutlineMail size={25} />
            </div>
            <p className="info__value">
              <a href="mailto:fernando.rogelin@hotmail.com">fernando.rogelin@hotmail.com</a>
            </p>
          </div>
          <div className="info">
            <div className="info__icon">
              <CiLocationOn size={25} />
            </div>
            <p className="info__value">Guaíba / Porto Alegre - RS</p>
          </div>
        </div>

        <footer className="footer">
          <img className="footer__logo" src={Logo.src} alt="logo" />

          <div className="socialNetwork">
            {links.map(({ name, link, icon: Icon }, index) => (
              <a
                key={index}
                target="_blank"
                href={link}
                rel="noreferrer"
                aria-label={`${name} ${t('con.ariaLabel')}`}
              >
                <div className="info__icon">
                  <Icon size={25} />
                </div>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Contact
