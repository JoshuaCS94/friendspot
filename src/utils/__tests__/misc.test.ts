import { cn } from '../misc'

describe('cn', () => {
  it('should join all three classes separated by a space', () => {
    const r = cn('a', 'b', 'c')

    expect(r).toEqual('a b c')
  })

  it('should return the same string if only one is provided', () => {
    const r = cn('a')

    expect(r).toEqual('a')
  })

  it('should skip all falsy values', () => {
    const r = cn('a', false, 'b', undefined, undefined, 'c', 'd', false)

    expect(r).toEqual('a b c d')
  })

  it('should return empty string if all values are falsy', () => {
    const r = cn(false, undefined, undefined, false)

    expect(r).toEqual('')
  })

  it('should return empty string if no argument is provided', () => {
    const r = cn()

    expect(r).toEqual('')
  })

  it('should not trim any spaces', () => {
    const r = cn(' a  ', 'b    ', '   c ')

    expect(r).toEqual(' a   b        c ')
  })
})
