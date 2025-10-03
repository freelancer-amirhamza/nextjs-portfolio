import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className="flex w-full bg-background/50 sticky top-0">
        <div className="container w-full flex items-center py-5 justify-between mx-auto ">
            <div className="text-5xl text-orange-400 font-bold">Logo</div>
            <nav className="flex text-xl gap-3 items-center justify-center ">
                <Link className='text-slate-300 hover:text-slate-50 ' href={"/about"}>About</Link>
                <Link href={"/experience"} className='text-slate-300 hover:text-slate-50 '>Experience</Link>
                <Link href={"/projects"} className='text-slate-300 hover:text-slate-50 '>Projects</Link>
                <Link href={"/testimonials"} className='text-slate-300 hover:text-slate-50 '>Testimonials</Link>
            </nav>
        </div>
    </section>
  )
}

export default Header