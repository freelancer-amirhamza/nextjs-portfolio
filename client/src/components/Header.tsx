'use client'
import { close, menu } from '@/assets';
import { navLinks } from '@/configs/page';
import { styles } from '@/style';
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';


const Header = () => {
  const [active, setActive ] = useState('')
  const [toggle, setToggle] = useState(false);

  return (
    <nav
    className={ ` w-full flex items-center ${styles.paddingX}
    py-5 fixed top-0 z-20 bg-primary bg-opacity-10 backdrop-blur-lg shadow-lg  `}
    >
        <div className='w-full flex justify-between
          items-center max-w-7xl mx-auto  ' >
            <Link href={"/"}
            className='flex items-center gap2'
            onClick={() =>{
              setActive("");
              window.scrollTo(0, 0);
            }}
            >
            <h1 className=" text-gradient lg:text-6xl text-5xl  gap-x-3 flex flex-row leading-none uppercase">
              <span className='max-sm:text-2xl font-primary ' >Amir</span>
              <span className='max-sm:text-2xl font-primary' >Hamza</span>
            </h1>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10' >
              {navLinks.map((link) => (
                <li
                key={link.id}
                className={` ${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer
                `}
                onClick={() => setActive(link.title)}
                >

                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
              }
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Image src={toggle ? close : menu} alt="menu"
              className='w-[28px] h-[28px] object-contain cursor-pointer '
              onClick={() => setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient
              absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `} >
                <ul className='list-none flex flex-col gap-4 justify-end items-start  ' >
              {navLinks.map((link) => (
                <li
                key={link.id}
                className={` ${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } font-poppins  text-[16px] font-medium cursor-pointer
                `}
                onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
                }}
                >

                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
              }
            </ul>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Header

