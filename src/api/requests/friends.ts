import { axios } from './utils/axios'
import { FetchAllFriends, FetchFriend } from './friends.types'

export const fetchAllFriends: FetchAllFriends = () =>
  axios.get('/friends').then(r => r.data)

export const fetchFriend: FetchFriend = () =>
  axios.get('/friends/id').then(r => r.data)
