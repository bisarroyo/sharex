'use client'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'

import { Button } from '@nextui-org/button'

export default function PostMenu() {
  return (
    <Dropdown backdrop='blur'>
      <DropdownTrigger>
        <Button variant='bordered'>Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='new'>New file</DropdownItem>
        <DropdownItem key='copy'>Copy link</DropdownItem>
        <DropdownItem key='edit'>Edit file</DropdownItem>
        <DropdownItem key='delete' className='text-danger' color='danger'>
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
