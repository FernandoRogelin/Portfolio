import './styles.scss';

import Block from 'components/Block';

const Services = () => {
  return (
    <div className='services'>
      <h1 className='services__title'>Services</h1>

      <div>
        <Block title='testando o block' type='desktop' />
      </div>
    </div>
  )
}

export default Services
