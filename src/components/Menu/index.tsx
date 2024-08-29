import { useState, useEffect } from 'react'
import './style.scss'

import options from './options'
import { languages } from 'i18n/ui'
import Button from 'components/Button'
import { useTranslations } from 'i18n/utils'
import Logo from '../../assets/images/logo-preview.png'

import classNames from 'classnames'
import { IoLanguage } from "react-icons/io5"
import { Link, animateScroll } from 'react-scroll'


export default function Menu() {
  const [scroll, setScroll] = useState(false)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(window.location.pathname.replace('/', ''))

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
      <div className='menu'>
        <img
          alt="logo"
          src={Logo.src}
          className="menu__logo"
          onClick={() => animateScroll.scrollToTop()}
        />
        <ul className="list">
          {options.map((option, index) =>
            <Link key={index} to={option.name} smooth offset={-100}>
              <li className="list__item">{t(option.name)}</li>
            </Link>
          )}

          <div className='list__separator' />

          <div className="languages">
            <IoLanguage size={14} />

            <select
              className="languages__select"
              value={selectedLanguage}
              onChange={e => changeScreen(e.target.value)}
            >
              <option value="en/" className="languages__option">English</option>

              <option value="pt/" className="languages__option">Português</option>
            </select>
          </div>

          <Link to='contact' smooth offset={-100}>
            <li>
              <Button uppercase>{t('nav.contact')}</Button>
            </li>
          </Link>
        </ul>

        <div
          className='menu__hamburguer'
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        />
      </div>

      {isOpenMobileMenu && (
        <ul className='listMobile'>
          {options.map((option, index) =>
            <Link
              smooth
              key={index}
              offset={-100}
              to={option.name}
              onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            >
              <li className="listMobile__item">{option.name}</li>
            </Link>
          )}
          <Link to='contact' smooth offset={-100} onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}>
            <li className="listMobile__item">
              <Button uppercase fullWidth>contact</Button>
            </li>
          </Link>
        </ul>
      )}
    </header>
  );
}
