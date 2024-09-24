import type { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
  secondary?: boolean
  fullWidth?: boolean
  uppercase?: boolean
} & ComponentPropsWithoutRef<'button'>
