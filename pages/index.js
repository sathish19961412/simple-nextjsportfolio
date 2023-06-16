import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import { Inter } from '@next/font/google'
import code from '../public/code.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sathish Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
          <section className='min-h-screen'>
              <nav className='py-10 mb-12 flex justify-between'>
                <h1 className='text-xl font-burtons'>Sathish</h1>
                <ul className='flex justify-between gap-8'>
                  <li><BsFillMoonStarsFill />{''}</li>
                  <li className='text-xl text-blue-500 hover:text-green-500 cursor-pointer'>Resume</li>
                </ul>
              </nav>
              <div className='text-center p-10'>
                 <h2 className='text-5xl py-5 text-teal-600'>Sathish</h2>
                 <h3 className='text-2xl py-2'>FrontEnd Developer</h3>
                 <p className='text-md py-5  font-medium leading-8 text-gray-600'>
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  
                 </p>
              </div>
              <div className='text-6xl flex justify-center gap-16 text-blue-600'>
                <AiFillLinkedin />
                <AiFillTwitterCircle  />
                <AiFillYoutube />
              </div>
          </section>

          <section className='py-11'>
             <div>
                <h3 className='text-3xl py-1 text-green-700 font-medium'>Services I Offer</h3>
                <p className='text-md py-2 leading-8 text-gray-700'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered <span className='text-green-800 hover:text-red-500 cursor-pointer'>alteration </span>in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p className='text-md py-2 leading-8 text-gray-700'>
                  There are <span className='text-green-800 hover:text-red-500 cursor-pointer'>many variations</span> of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
             </div>
             <div>
               <div>
                  <Image src={code} />
                  <h3>Coding Language</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                  </p>
                  
               </div>
             </div>
          </section>
      </main>
    </>
  )
}
