import type { ComponentPropsWithoutRef } from 'react'

export type ProjectProps = {
  title: string
  photo: string
  invert?: boolean
  technologies?: string
} & ComponentPropsWithoutRef<'div'>
