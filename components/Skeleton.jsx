import { Skeleton } from '@nextui-org/skeleton'
import { Card } from '@nextui-org/card'

export default function SkeletonPlaceholder() {
  return (
    <Card
      className='w-full h-screen space-y-5 p-4'
      radius='none'
      isBlurred={true}
    >
      <Skeleton className='rounded-lg'>
        <div className='h-60 rounded-lg bg-default-300'></div>
      </Skeleton>
      <div className='space-y-3'>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-4/5 rounded-lg'>
          <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-2/5 rounded-lg'>
          <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
        </Skeleton>
      </div>
      <Skeleton className='rounded-lg'>
        <div className='h-60 rounded-lg bg-default-300'></div>
      </Skeleton>
      <div className='space-y-3'>
        <Skeleton className='w-3/5 rounded-lg'>
          <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-4/5 rounded-lg'>
          <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
        </Skeleton>
        <Skeleton className='w-2/5 rounded-lg'>
          <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
        </Skeleton>
      </div>
    </Card>
  )
}
