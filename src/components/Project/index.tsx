import './styles.scss';

import classNames from 'classnames';
import type { ProjectProps } from './types';

const Project = ({ invert = false, title, photo, children }: ProjectProps) => {
  return (
    <div className={classNames({ project: true, invert })}>
      <div className='information'>
        <h1 className='information__title'>{title}</h1>

        <p className='information__text'>{children}</p>
      </div>

      <div className='picture'>
        <div className='picture__frame' />
        <div className='picture__photo' />
      </div>
    </div>
  )
}

export default Project
