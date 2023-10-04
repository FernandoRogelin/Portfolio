import type { ComponentPropsWithRef } from "react"

export type ProjectProps = {
  title: string
  photo: string
  invert?: boolean
} & ComponentPropsWithRef<'div'>
