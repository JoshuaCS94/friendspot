import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import { UserDetailsCard } from '#components/organisms'
import { fetchAllFriends, fetchFriend } from '#api/requests/friends'
import { Friend } from '#api/models'

type FriendDetailsPageQuery = {
  'friend-id': string
}

type FriendDetailsPageProps = {
  friend: Friend
}

const FriendDetailsPage: NextPage<FriendDetailsPageProps> = ({ friend }) => {
  return (
    <div className='mx-auto flex h-screen max-w-xl flex-col py-8'>
      <div className='px-8'>
        <Link href='/'>
          <a>
            <button className='p-2 text-blue-600'>
              <ArrowLeftIcon width={16} height={16} />
            </button>
          </a>
        </Link>
      </div>
      <UserDetailsCard
        image={friend.img}
        available={friend.available}
        name={`${friend.first_name} ${friend.last_name}`}
        tags={friend.statuses}
        info={{
          bio: friend.bio,
          phone: friend.phone,
          location: {
            address: friend.address_1,
            city: friend.city,
            state: friend.state,
            zipCode: friend.zipcode,
          },
        }}
        photos={friend.photos}
      />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<
  FriendDetailsPageQuery
> = async () => {
  const friends = await fetchAllFriends()

  return {
    paths: friends.map(f => ({ params: { 'friend-id': f.id.toString() } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  FriendDetailsPageProps,
  FriendDetailsPageQuery
> = async ({ params }) => {
  const friend = await fetchFriend({ friendId: parseInt(params!['friend-id']) })

  return {
    props: {
      friend,
    },
  }
}

export default FriendDetailsPage
