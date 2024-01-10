import './styles.scss';

import type { BlockProps } from './types';

const Block = ({ title, icon: Icon, children }: BlockProps) => {
  return (
    <div className='border'>
      <div className='block'>
        <div className='wrapperTitle'>
          <div className='wrapperTitle__icon'>
            <Icon size={35} className='wrapperTitle__svg' />
          </div>
          <h2 className='wrapperTitle__title'>{title}</h2>
        </div>

        <p className='block__text'>{children}</p>
      </div>
    </div>
  )
}

export default Block
