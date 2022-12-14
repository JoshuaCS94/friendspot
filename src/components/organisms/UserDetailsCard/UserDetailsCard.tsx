import { Image, Badge, AvailabilityIndicator } from '../../atoms'
import { Tabs } from '../../molecules'

import { Url } from '#api/models'
import { cn } from '#utils/misc'

const TABS = ['Info', 'Photos']

export type UserDetailsCardProps = {
  image: Url
  available: boolean
  name: string
  tags: string[]
  info: {
    bio: string
    phone: string
    location: {
      address: string
      city: string
      state: string
      zipCode: string
    }
  }
  photos: Url[]
  onSelectPhoto: (photo: Url) => void
}

export const UserDetailsCard = ({
  image,
  available,
  name,
  tags,
  info,
  photos,
  onSelectPhoto,
}: UserDetailsCardProps) => (
  <div className='flex w-[500px] flex-col gap-4 p-12 shadow-lg'>
    <div className='relative [&>span]:!block'>
      <Image
        src={image}
        alt='user-picture'
        layout='fixed'
        width={150}
        height={150}
      />
      <AvailabilityIndicator
        available={available}
        className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'
      />
    </div>
    <div>
      <p className='text-2xl font-bold'>{name}</p>
      <ul title='tags' className='mt-2 flex flex-wrap items-center gap-2'>
        {tags.map(t => (
          <li key={t} className='contents'>
            <Badge>{t}</Badge>
          </li>
        ))}
      </ul>
    </div>
    <Tabs tabs={TABS} classNames={{ containers: { content: 'mt-4' } }}>
      <div role='tabpanel' className='flex flex-col divide-y'>
        <div className='pb-4'>
          <div className='text-indigo-300 md:mb-2'>Bio:</div>
          <p>{info.bio}</p>
        </div>
        <Info title='Phone:' text={info.phone} className='py-4' />
        <div className='flex flex-col gap-2 pt-4'>
          <Info title='Address:' text={info.location.address} />
          <Info title='City:' text={info.location.city} />
          <Info title='State:' text={info.location.state} />
          <Info title='Zip Code:' text={info.location.zipCode} />
        </div>
      </div>
      <div role='tabpanel' className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {photos.map((p, i) => (
          <button
            key={p}
            className='w-fit rounded transition-transform hover:scale-110 hover:outline hover:outline-blue-600'
            onClick={() => onSelectPhoto(p)}
          >
            <Image
              src={p}
              alt={`gallery-image-${i}`}
              width={128}
              height={128}
              objectFit='cover'
              className='!block'
            />
          </button>
        ))}
      </div>
    </Tabs>
  </div>
)

type InfoProps = {
  title: string
  text: string
  className?: string
}

const Info = ({ title, text, className }: InfoProps) => (
  <div className={cn('md:flex md:items-center', className)}>
    <div className='grow text-indigo-300'>{title}</div>
    <p className='w-52'>{text}</p>
  </div>
)
