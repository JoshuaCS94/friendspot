import { useEffect, useRef, useCallback, cloneElement, Children } from 'react'
import { useEventListener } from 'usehooks-ts'

import { cn } from '#utils'

export type CarouselProps = {
  children: JSX.Element[]
  initial?: number
  classNames?: {
    root?: string
    item?: string
  }
}

export const Carousel = ({
  children,
  initial = 0,
  classNames,
}: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMoveRight = () => {
    if (ref.current?.firstElementChild)
      ref.current.scrollBy(ref.current.firstElementChild.clientWidth, 0)
  }

  const handleMoveLeft = () => {
    if (ref.current?.firstElementChild)
      ref.current.scrollBy(-ref.current.firstElementChild.clientWidth, 0)
  }

  const handleMoveToElement = useCallback((idx: number) => {
    ref.current?.children[idx].scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    })
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault()
        handleMoveRight()
        break
      case 'ArrowLeft':
        e.preventDefault()
        handleMoveLeft()
        break
    }
  }

  useEventListener('keydown', handleKeyDown)

  useEffect(() => {
    handleMoveToElement(initial)
  }, [initial, handleMoveToElement])

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
