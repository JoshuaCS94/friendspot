import { ALL_FRIENDS, FRIEND_DETAILS } from '#mocks/data/friends'

import { fetchAllFriends, fetchFriend } from '../friends'

describe('fetchAllFriends', () => {
  it('should return the list of friends', async () => {
    const r = await fetchAllFriends()

    expect(r).toEqual(ALL_FRIENDS)
  })
})

describe('fetchFriend', () => {
  it('should return the details of a friend', async () => {
    const r = await fetchFriend({ friendId: 0 })

    expect(r).toEqual(FRIEND_DETAILS)
  })
})
