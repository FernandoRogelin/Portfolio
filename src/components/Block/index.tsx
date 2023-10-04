import './styles.scss';

import type { BlockProps } from './types';

const Block = ({ title, type, children }: BlockProps) => {
  return (
    <div className='block'>
      <p className='block__text'>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século
        XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
      </p>
    </div>
  )
}

export default Block
