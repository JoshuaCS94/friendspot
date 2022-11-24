import { useState } from 'react'

import { Tab } from '../../atoms'

import { cn } from '#utils/misc'

export type TabsProps = {
  tabs: string[]
  defaultSelected?: number
  classNames?: {
    root?: string
    containers?: {
      tabs?: string
      content?: string
    }
  }
  children?: JSX.Element[]
  onSelect?: (selected: number) => void
}

export const Tabs = ({
  tabs,
  defaultSelected = 0,
  classNames,
  onSelect,
  children,
}: TabsProps) => {
  const [selected, setSelected] = useState(defaultSelected)

  return (
    <div className={classNames?.root}>
      <div
        className={cn('flex items-center gap-2', classNames?.containers?.tabs)}
      >
        {tabs.map((t, i) => (
          <Tab
            key={t}
            active={i === selected}
            onClick={() => {
              onSelect?.(i)
              setSelected(i)
            }}
          >
            {t}
          </Tab>
        ))}
      </div>
      <div className={classNames?.containers?.content}>
        {children?.[selected]}
      </div>
    </div>
  )
}
