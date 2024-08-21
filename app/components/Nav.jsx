import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Nav = () => {
  let Links = [
    {name: "CONTACT", link:"/contact"},
    {name: "ABOUT", link:"/about"}
  ]
  return (
    <div className='shadow-md w-full flex items-center justify-between bg-white py-4 px-6 mt-2'>
      <div className='flex-1 font-bold text-4xl'>
        <span>Counter</span>
      </div>
      <ul className='flex items-center space-x-4 px-5 ml-3 text-sm font-light'>
        {
          Links.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))
        }
      </ul>
      <div>
        <ConnectButton
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
      </div>
    </div>
  )
}

export default Nav;