import './styles.scss';

import links from './links';
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineMail } from 'react-icons/md'
import Logo from '../../assets/images/logo-preview.png';

const Contact = () => {
  return (
    <div className='wrapperContact' id='Contato'>
      <div className='contact'>
        <h1 className='contact__title'>Contato</h1>

        <h2 className='contact__drop'>Deixe uma mensagem</h2>
        <p className='contact__text'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou</p>

        <div>
          <div className='info'>
            <div className='info__icon'>
              <MdOutlineMail size={25} />
            </div>
            <p className='info__value'>
              <a href="mailto:fernando.rogelin@hotmail.com">fernando.rogelin@hotmail.com</a>
            </p>
          </div>
          <div className='info'>
            <div className='info__icon'>
              <CiLocationOn size={25} />
            </div>
            <p className='info__value'>Guaíba / Porto Alegre - RS</p>
          </div>
        </div>

        <footer className='footer'>
          <img className="footer__logo" src={Logo.src} alt="logo" />

          <div className='socialNetwork'>
            {links.map(({ link, icon: Icon }, index) => (
              <a key={index} target='_blank' href={link}>
                <div className='info__icon'>
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
