import WrapperMain from '@/data/components/layout/WrapperMain'
import Link from 'next/link'

import Miffy from '@/public/assets/images/web/Miffy-Profile-Alt.png'
import Image from 'next/image';

export default function Home() {

  return (
    <WrapperMain>
      <div className='flex justify-center'>
      <div className='flex items-center flex-col'>
        <div className='flex items-center justify-center w-36 h-36 mb-2'>
          <Image src={Miffy} alt="" className="w-32 h-32 hover:w-36 hover:h-36 duration-200 rounded-full border-4 border-black"/>
        </div>
        <h1>Welcome!</h1>
        <div className='flex flex-col items-center my-4 text-center'>
          <p>My name is Steve. I am an undergraduate physics student at the University of Massachusetts Lowell.</p>
          <p>This is my personal website where I share my notes, projects, art.</p>
        </div>
      </div>
      </div>
      <ul className='flex flex-col'>
        <Link href="/about"><div className='flex items-center bg-stone-800 pl-8 mb-2 h-16 rounded-sm font-medium hover:bg-stone-700 duration-200'>About</div></Link>
        <Link href="/notes"><div className='flex items-center bg-stone-800 pl-8 mb-2 h-16 rounded-sm font-medium hover:bg-stone-700 duration-200'>Notes</div></Link>
        <Link href="/projects"><div className='flex items-center bg-stone-800 pl-8 mb-2 h-16 rounded-sm font-medium hover:bg-stone-700 duration-200'>Projects</div></Link>
        <Link href="/art"><div className='flex items-center bg-stone-800 pl-8 mb-2 h-16 rounded-sm font-medium hover:bg-stone-700 duration-200'>Art</div></Link>
        <Link href="/blog"><div className='flex items-center bg-stone-800 pl-8 h-16 rounded-sm font-medium hover:bg-stone-700 duration-200'>Blog</div></Link>
      </ul>
    </WrapperMain>
  )
}
