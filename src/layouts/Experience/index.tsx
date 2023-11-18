import './styles.scss';

import logos from './logos.ts'

const Experience = () => {
  return (
    <div className='experience' id='Experiências'>
      <h1 className='services__title'>Experiências</h1>

      <div className='wrapperIcons'>
        {logos.map((logo, index) => (
          <div key={index} className='logos'>
            <img
              title={logo.title}
              className='logos__icon'
              alt={`${logo.title}-logo`}
              src={`src/assets/icons/${logo.path}`}
            />
            <p className='logos__title'>{logo.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
