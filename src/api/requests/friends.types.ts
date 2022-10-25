import { Request } from './utils'
import { Friend, FriendSummary, Id } from '../models'

export type FetchAllFriends = Request<
  FetchAllFriendsInput,
  FetchAllFriendsOutput
>

export type FetchAllFriendsInput = void

export type FetchAllFriendsOutput = FriendSummary[]

export type FetchFriend = Request<FetchFriendInput, FetchFriendOutput>

export type FetchFriendInput = {
  friendId: Id
}

export type FetchFriendOutput = Friend
