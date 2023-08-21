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
    data: { session }
  } = await supabase.auth.getSession()
  return (
    <Navbar shouldHideOnScroll className='border-b'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>SHAREX</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        {session ? (
          <NavbarItem>
            <Button as={Link} color='primary' href='#' variant='flat'>
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className='hidden lg:flex'>
              <Link href='/login'>Login</Link>
            </NavbarItem>
            <p>or</p>
            <NavbarItem>
              <Button as={Link} color='primary' href='/signup' variant='flat'>
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}
