import './styles.scss';

import classNames from 'classnames';
import type { ProjectProps } from './types';

const Project = ({ invert = false, title, technologies, photo, children }: ProjectProps) => {
  return (
    <div className={classNames({ project: true, invert })}>
      <div className='information'>
        <h1 className='information__title'>{title}</h1>

        <p className='information__text'>{children}</p>

        {technologies && <p className='information__technologies'>
          Neste projeto foi usado: <span className='information__frameworks'>{technologies}</span>
        </p>}
      </div>

      <div className='picture'>
        <div className='picture__frame' />
        <div
          className='picture__photo'
          style={{ backgroundImage: `url(src/assets/images/${photo})` }}
        />
      </div>
    </div>
  )
}

export default Project
