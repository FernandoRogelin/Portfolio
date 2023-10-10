import type { ComponentPropsWithoutRef } from "react"

import type { IconType } from 'react-icons'

export type BlockProps = {
  title: string
  icon: IconType
} & ComponentPropsWithoutRef<'p'>
