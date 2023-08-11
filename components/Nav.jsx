import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Nav() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user }
  } = await supabase.auth.getUser()
  return (
    <Navbar shouldHideOnScroll className='border-b'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>ACME</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        {user ? (
          <NavbarItem>
            <Button as={Link} color='primary' href='#' variant='flat'>
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className='hidden lg:flex'>
              <Link href='#'>Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color='primary' href='#' variant='flat'>
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}
