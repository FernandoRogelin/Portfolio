import './style.scss'

import options from './options';
import Logo from '../../assets/images/logo-preview.png';

export default function Menu() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo.src} alt="logo" />
      <ul className="list">
        {options.map((option) =>
          <li className="list__item">{option.name}</li>
        )}
      </ul>
    </header>
  );
}
