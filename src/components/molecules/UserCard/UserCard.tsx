import {
  Image,
  ImageProps,
  Button,
  Badge,
  AvailabilityIndicator,
} from '../../atoms'

export type UserCardProps = {
  image: ImageProps['src']
  available: boolean
  name: string
  tags: string[]
  onSeeDetails?: () => void
}

export const UserCard = ({
  image,
  available,
  name,
  tags,
  onSeeDetails,
}: UserCardProps) => (
  <div className='flex items-center gap-4 p-3 shadow-2xl'>
    <div className='relative [&>span]:!block'>
      <Image src={image} alt='user-picture' width={60} height={60} />
      <AvailabilityIndicator
        available={available}
        className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'
      />
    </div>
    <div className='grow'>
      <p className='font-medium'>{name}</p>
      <div className='mt-1 flex items-center gap-2'>
        {tags.map(t => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
    <Button onClick={onSeeDetails} className='mr-2'>
      Details
    </Button>
  </div>
)
