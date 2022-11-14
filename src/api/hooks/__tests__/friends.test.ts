import { renderHook, waitFor } from '@testing-library/react'

import { ALL_FRIENDS, FRIEND_DETAILS } from '#mocks/data/friends'

import { useAllFriends, useFriend } from '../friends'
import { createWrapper } from './utils'

describe('useAllFriends', () => {
  const renderAllFriends = () =>
    renderHook(() => useAllFriends(), {
      wrapper: createWrapper(),
    })

  it('should return the list of all friends', async () => {
    const { result } = renderAllFriends()

    await waitFor(() => expect(result.current.data).toBeDefined())

    expect(result.current.data).toEqual(ALL_FRIENDS)
  })
})

describe('useFriend', () => {
  const renderFriend = () =>
    renderHook(() => useFriend({ friendId: 0 }), {
      wrapper: createWrapper(),
    })

  it('should return the details of a friend', async () => {
    const { result } = renderFriend()

    await waitFor(() => expect(result.current.data).toBeDefined())

    expect(result.current.data).toEqual(FRIEND_DETAILS)
  })
})
