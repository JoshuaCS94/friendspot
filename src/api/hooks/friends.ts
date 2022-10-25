import { useQuery } from '@tanstack/react-query'

import { fetchAllFriends, fetchFriend } from '../requests/friends'
import { FetchFriendInput } from '../requests/friends.types'

export const useAllFriends = () =>
  useQuery(['friends'], () => fetchAllFriends())

export const useFriend = (input: FetchFriendInput) =>
  useQuery(['friend', input.friendId], () => fetchFriend(input))
