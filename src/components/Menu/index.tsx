import { useState, useEffect } from 'react'
import './style.scss'

import options from './options';
import classNames from 'classnames';
import Button from 'components/Button';
import Logo from '../../assets/images/logo-preview.png';

export default function Menu() {
  const [scroll, setScroll] = useState(false)

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
        <img className="menu__logo" src={Logo.src} alt="logo" />
        <ul className="list">
          {options.map((option, index) =>
            <li key={index} className="list__item">{option.name}</li>
          )}
          <li>
            <Button uppercase>contact</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
