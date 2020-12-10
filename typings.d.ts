/*
 * typings.d.ts
 * Description: Add typings for local implementations
 * Copyright (c) 2020 Mark Fehrenbacher
 */
declare namespace MF {
  interface MenuCfgItem {
    id: string
    route: string
    menuLabel: string
    tocLabel?: string
    snippet?: JSX.Element | string
    tooltip?: string
  }
}
