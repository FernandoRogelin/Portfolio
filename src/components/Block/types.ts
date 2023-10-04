import type { ComponentPropsWithoutRef } from "react"

export type BlockProps = {
  type: Type
  title: string
} & ComponentPropsWithoutRef<'p'>

type Type = 'development' | 'desktop'
