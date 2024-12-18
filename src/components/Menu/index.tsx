import { useState, useEffect } from 'react'
import './style.scss'

import options from './options'
import { languages } from 'i18n/ui'
import ButtonComponent from 'components/Button'
import { useTranslations } from 'i18n/utils'
import Logo from '../../assets/images/logo-preview.png'

import classNames from 'classnames'
import { IoLanguage } from 'react-icons/io5'
import { Button, animateScroll } from 'react-scroll'

export default function Menu() {
  const [scroll, setScroll] = useState(false)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(
    window.location.pathname.replace('/', '')
  )

  const pathname = window.location.pathname.replaceAll('/', '') as keyof typeof languages
  const t = useTranslations(pathname)

  function listenScrollEvent() {
    window.scrollY < 20 ? setScroll(false) : setScroll(true)
  }

  function changeScreen(language: string) {
    setSelectedLanguage(language)
    window.location.href = `${window.location.origin}/${language}`
  }

  useEffect(() => {
    if (document.documentElement.scrollTop > 20) setScroll(true)

    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [])

  return (
    <header className={classNames({ content: true, scroll })}>
      <div className="menu">
        <img
          alt="logo"
          src={Logo.src}
          className="menu__logo"
          onClick={() => animateScroll.scrollToTop()}
        />

        <div className="languages languages--mobile">
          <IoLanguage size={14} />

          <label aria-label="Select">
            <select
              className="languages__select"
              value={selectedLanguage}
              onChange={e => changeScreen(e.target.value)}
            >
              <option value="en/" className="languages__option">
                English
              </option>

              <option value="pt/" className="languages__option">
                Português
              </option>
            </select>
          </label>
        </div>

        <ul className="list">
          {options.map((option, index) => (
            <li key={index}>
              <Button className="list__item" to={option.name} smooth offset={-100}>
                {t(option.name)}
              </Button>
            </li>
          ))}

          <div className="list__separator" />

          <div className="languages">
            <IoLanguage size={14} />

            <label aria-label="Select">
              <select
                className="languages__select"
                value={selectedLanguage}
                onChange={e => changeScreen(e.target.value)}
              >
                <option value="en/" className="languages__option">
                  English
                </option>

                <option value="pt/" className="languages__option">
                  Português
                </option>
              </select>
            </label>
          </div>

          <li>
            <Button to="contact" smooth offset={-100}>
              <ButtonComponent uppercase>{t('nav.contact')}</ButtonComponent>
            </Button>
          </li>
        </ul>

        <div className="menu__hamburguer" onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} />
      </div>

      {isOpenMobileMenu && (
        <ul className="listMobile">
          {options.map((option, index) => (
            <li key={index}>
              <Button
                smooth
                offset={-100}
                to={option.name}
                className="listMobile__item"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                {t(option.name)}
              </Button>
            </li>
          ))}

          <li>
            <Button
              to="contact"
              smooth
              offset={-100}
              className="listMobile__item"
              onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            >
              <ButtonComponent uppercase fullWidth>
                contact
              </ButtonComponent>
            </Button>
          </li>
        </ul>
      )}
    </header>
  )
}
