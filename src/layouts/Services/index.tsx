import './styles.scss';

import Block from 'components/Block';
import { RiComputerLine, RiCodeSSlashLine } from 'react-icons/ri'

const Services = () => {
  return (
    <div className='services' id='nav.services'>
      <h1 className='services__title'>Serviços</h1>

      <div className='development'>
        <Block title='Website' icon={RiCodeSSlashLine}>
          É uma coleção de páginas da Web organizadas e localizadas em um
          servidor na rede. Um website pode tratar de diversos assunstos e
          disponibilizam as informações em forma de conteúdo de texto e mídia.
        </Block>
        <Block title='Desktop app' icon={RiComputerLine}>
          Aplicativos desktop são aplicações que são instaladas e, em sua maioria,
          roda no computador desktop ou laptop. Também são aplicações que podem ser
          executadas em dispositivos portáteis como telefones, tablets e outros.
        </Block>
      </div>
    </div>
  )
}

export default Services
