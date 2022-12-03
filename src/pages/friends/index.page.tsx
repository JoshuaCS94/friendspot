import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { UserCard } from '#components/molecules'
import { fetchAllFriends } from '#api/requests/friends'
import { FriendSummary } from '#api/models'

type FriendsPageProps = {
  friends: FriendSummary[]
}

const FriendsPage: NextPage<FriendsPageProps> = ({ friends }) => {
  const router = useRouter()

  return (
    <div className='mx-auto flex h-screen max-w-xl flex-col md:px-4 md:py-12'>
      <h1 className='text-2xl font-bold text-indigo-300'>Friends</h1>
      <ul
        title='friends'
        className='flex grow flex-col gap-y-2 overflow-y-auto'
      >
        {friends.map(f => (
          <li key={f.id}>
            <UserCard
              image={f.img}
              available={f.available}
              name={`${f.first_name} ${f.last_name}`}
              tags={[f.status]}
              onSeeDetails={() => router.push(`/friends/${f.id}`)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<FriendsPageProps> = async () => {
  const friends = await fetchAllFriends()

  return {
    props: {
      friends,
    },
  }
}

export default FriendsPage
