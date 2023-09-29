import type { ComponentPropsWithoutRef } from "react"

export type ButtonProps = {
  secondary?: boolean
  uppercase?: boolean
} & ComponentPropsWithoutRef<'button'>
