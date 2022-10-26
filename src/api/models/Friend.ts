import { Base, Url } from './Base'

export interface Friend extends Base {
  img: Url
  first_name: string
  last_name: string
  phone: string
  address_1: string
  city: string
  state: string
  zipcode: string
  bio: string
  photos: string[]
  statuses: string[]
  available: boolean
}

export interface FriendSummary extends Base {
  img: Url
  first_name: string
  last_name: string
  status: string
  available: boolean
}
