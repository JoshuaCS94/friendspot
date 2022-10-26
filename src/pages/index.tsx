import type { GetStaticProps, NextPage } from 'next'

import { UserCard } from '#components/molecules'
import { fetchAllFriends } from '#api/requests/friends'
import { FriendSummary } from '#api/models'

type HomeProps = {
  friends: FriendSummary[]
}

const Home: NextPage<HomeProps> = ({ friends }) => {
  return (
    <div className='mx-auto flex h-screen max-w-xl flex-col px-4 py-12'>
      <h1 className='text-2xl font-bold text-indigo-300'>Friends</h1>
      <div className='flex grow flex-col gap-y-2 overflow-y-auto'>
        {friends.map(f => (
          <UserCard
            key={f.id}
            image={f.img}
            available={f.available}
            name={`${f.first_name} ${f.last_name}`}
            tags={[f.status]}
          />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const friends = await fetchAllFriends()

  return {
    props: {
      friends,
    },
  }
}

export default Home
