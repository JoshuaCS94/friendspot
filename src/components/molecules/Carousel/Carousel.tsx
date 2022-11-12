import {
  useState,
  useEffect,
  useRef,
  useCallback,
  cloneElement,
  Children,
} from 'react'
import { useEventListener } from 'usehooks-ts'

import { cn } from '#utils'

export type CarouselProps = {
  children: JSX.Element[]
  defaultSelected?: number
  classNames?: {
    root?: string
    item?: string
  }
}

export const Carousel = ({
  children,
  defaultSelected = 0,
  classNames,
}: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState(defaultSelected)

  const handleMoveRight = () => {
    if (ref.current?.firstElementChild)
      ref.current.scrollBy(ref.current.firstElementChild.clientWidth, 0)
  }

  const handleMoveLeft = () => {
    if (ref.current?.firstElementChild)
      ref.current.scrollBy(-ref.current.firstElementChild.clientWidth, 0)
  }

  const handleScroll = () => {
    if (ref.current)
      setSelected(
        Math.round(ref.current.scrollLeft / ref.current.children[0].clientWidth)
      )
  }

  const handleMoveToElement = useCallback((idx: number) => {
    ref.current?.children[idx].scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    })
  }, [])

  useEventListener('scroll', handleScroll, ref)

  useEffect(() => {
    handleMoveToElement(defaultSelected)
  }, [defaultSelected, handleMoveToElement])

  return (
    <div className={cn('overflow-hidden', classNames?.root)}>
      <div
        ref={ref}
        className='-mb-8 inline-flex snap-x snap-mandatory items-center gap-4 overflow-x-auto'
      >
        {Children.map(children, ch =>
          cloneElement(ch, {
            className: cn(
              ch.props.className,
              'snap-center shrink-0',
              classNames?.item
            ),
          })
        )}
      </div>
    </div>
  )
}
