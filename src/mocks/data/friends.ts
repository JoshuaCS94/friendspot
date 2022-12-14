import { FriendSummary, Friend } from '#api/models'

export const ALL_FRIENDS: FriendSummary[] = [
  {
    id: 1,
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    first_name: 'Jeremy',
    last_name: 'Davis',
    status: 'At work...',
    available: false,
  },
  {
    id: 2,
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    first_name: 'Vlad',
    last_name: 'Baratovich',
    status: 'Hangout out by the pool',
    available: true,
  },
  {
    id: 3,
    img: 'https://randomuser.me/api/portraits/women/3.jpg',
    first_name: 'Reese',
    last_name: 'Samsonite',
    status: 'At NG-conf!',
    available: true,
  },
  {
    id: 4,
    img: 'https://randomuser.me/api/portraits/men/4.jpg',
    first_name: 'Edwardo',
    last_name: 'Gonzalez',
    status: 'Developing something amazing',
    available: false,
  },
  {
    id: 5,
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    first_name: 'Jim',
    last_name: 'Denison',
    status: 'Designing beatiful things',
    available: false,
  },
  {
    id: 6,
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    first_name: 'Steph',
    last_name: 'Walters',
    status: 'Developing something amazing',
    available: true,
  },
]

export const FRIEND_DETAILS: Friend = {
  id: 6,
  img: 'https://randomuser.me/api/portraits/women/6.jpg',
  first_name: 'Steph',
  last_name: 'Walters',
  phone: '(820) 289-1818',
  address_1: '5190 Center Court Drive',
  city: 'Spring',
  state: 'TX',
  zipcode: '77370',
  bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
  photos: [
    'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/5751865d5eda7f7bcbf628febdd56a9bfaee4738',
    'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/bd5e75a3cdcd20d91bc1768cea6c469a0472b87d',
    'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/b6150fb5f62c88d0639003f63b513fd845527214',
    'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/091a479a761216b5b7d94cc3263612add8d2c06d',
    'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/c02cf3f314728a76c31758e99e1d9acd183df349',
    'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/ab73a346ebbff58e5ae2b1c8b90eab82be46992d',
    'https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/image/9191f32c2bb6b5cbb98164f80f4d7586c560674e',
  ],
  statuses: ['Developer', 'Working', 'Living a life'],
  available: true,
}
