'use client'

import {
  IconShare2,
  IconHandStop,
  IconStar,
  IconUserMinus,
  IconDots
} from '@tabler/icons-react'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'

import { Button } from '@nextui-org/button'

export default function PostMenu() {
  return (
    <Dropdown backdrop='blur'>
      <DropdownTrigger>
        <IconDots className='cursor-pointer' />
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='share' startContent={<IconShare2 />}>
          Share post
        </DropdownItem>
        <DropdownItem key='hide' startContent={<IconHandStop />}>
          Not interested
        </DropdownItem>
        <DropdownItem key='edit' startContent={<IconStar />}>
          favorites
        </DropdownItem>
        <DropdownItem
          key='delete'
          startContent={<IconUserMinus />}
          className='text-danger'
          color='danger'
        >
          Unfollow
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
