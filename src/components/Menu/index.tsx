import { useState, useEffect } from 'react'
import './style.scss'

import options from './options';
import { Link, animateScroll } from 'react-scroll'
import classNames from 'classnames';
import Button from 'components/Button';
import Logo from '../../assets/images/logo-preview.png';

export default function Menu() {
  const [scroll, setScroll] = useState(false)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  function listenScrollEvent() {
    window.scrollY < 20 ? setScroll(false) : setScroll(true)
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
              <li className="list__item">{option.name}</li>
            </Link>
          )}
          <Link to='contact' smooth offset={-100}>
            <li>
              <Button uppercase>Contato</Button>
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
