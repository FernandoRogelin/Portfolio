import './styles.scss';

import classNames from 'classnames';
import type { ButtonProps } from './types';

export default function Button({
  children,
  secondary = false,
  uppercase = false
}: ButtonProps) {
  return (
    <button className={classNames({
      button: true,
      secondary,
      uppercase,
    })}>{children}</button>
  )
}
