import './styles.scss'

import classNames from 'classnames'
import type { ButtonProps } from './types'

export default function Button({
  children,
  fullWidth = false,
  secondary = false,
  uppercase = false,
}: ButtonProps) {
  return (
    <button
      className={classNames({
        button: true,
        secondary,
        uppercase,
        fullWidth,
      })}
    >
      {children}
    </button>
  )
}
