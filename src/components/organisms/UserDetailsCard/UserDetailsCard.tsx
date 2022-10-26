import { Image, Badge, AvailabilityIndicator } from '../../atoms'
import { Tabs } from '../../molecules'

import { Url } from '#api/models'
import { cn } from '#utils'

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
}

export const UserDetailsCard = ({
  image,
  available,
  name,
  tags,
  info,
  photos,
}: UserDetailsCardProps) => (
  <div className='flex max-w-lg flex-col gap-4 p-12 shadow-lg'>
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
      <div className='mt-2 flex min-w-0 items-center gap-2'>
        {tags.map(t => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
    <Tabs tabs={TABS} classNames={{ containers: { content: 'mt-4' } }}>
      <div className='flex flex-col divide-y'>
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
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {photos.map(p => (
          <Image
            key={p}
            src={p}
            alt='gallery-image'
            width={64}
            height={64}
            layout='responsive'
          />
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
