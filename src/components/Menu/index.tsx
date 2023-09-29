import './style.scss'

import options from './options';
import Button from 'components/Button';
import Logo from '../../assets/images/logo-preview.png';

export default function Menu() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo.src} alt="logo" />
      <ul className="list">
        {options.map((option, index) =>
          <li key={index} className="list__item">{option.name}</li>
        )}
        <li>
          <Button uppercase>contact</Button>
        </li>
      </ul>
    </header>
  );
}
