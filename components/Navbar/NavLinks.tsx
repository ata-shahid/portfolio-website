import React from 'react'

type NavProps = {
    children: React.ReactNode;
}

const NavLinks = (props: NavProps) => {
  return (
    <div className=' nav-link text-white'>
      {props.children}
    </div>
  )
}

export default NavLinks
