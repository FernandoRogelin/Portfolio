import './styles.scss';

import Block from 'components/Block';
import { RiComputerLine, RiHtml5Line } from 'react-icons/ri'

const Services = () => {
  return (
    <div className='services'>
      <h1 className='services__title'>Services</h1>

      <div className='development'>
        <Block title='Desktop app' icon={RiComputerLine}>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século
          XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
        </Block>
        <Block title='Website' icon={RiHtml5Line}>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século
          XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
        </Block>
      </div>
    </div>
  )
}

export default Services
