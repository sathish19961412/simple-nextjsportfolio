import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import { Inter } from '@next/font/google'
import code from '../public/code.png'
import design from '../public/design.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import deved from '../public/deved.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Sathish Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black dark:text-white">
          <section className='min-h-screen'>
              <nav className='py-10 mb-12 flex justify-between'>
                <h1 className='text-xl font-burtons md:text-3xl lg:text-5xl'>Sathish</h1>
                <ul className='flex justify-between gap-8'>
                  <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}/>{''}</li>
                  <li className='text-xl text-blue-500 hover:text-green-500 cursor-pointer  dark:bg-black dark:text-white'>Resume</li>
                </ul>
              </nav>
              <div className='text-center p-10'>
                 <h2 className='text-5xl py-5 text-teal-600'>Sathish</h2>
                 <h3 className='text-2xl py-2'>FrontEnd Developer</h3>
                 <p className='text-md py-5  font-medium leading-8 text-gray-600  dark:bg-black dark:text-white' >
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  
                 </p>
              </div>
              <div className='text-6xl flex justify-center gap-16 text-blue-600  dark:bg-black dark:text-white'>
                <AiFillLinkedin />
                <AiFillTwitterCircle  />
                <AiFillYoutube />
              </div>
              <div className='w-60 h-60 rounded-full bg-blue-300 mx-auto relative mt-20 pt-8 md:w-96 md:h-96'>
                 <Image src={deved} />
              </div>
          </section>

          <section className='py-11'>
             <div>
                <h3 className='text-3xl py-1 text-green-700 font-medium  dark:bg-black dark:text-white'>Services I Offer</h3>
                <p className='text-md py-2 leading-8 text-gray-700  dark:bg-black dark:text-white'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered <span className='text-green-800 hover:text-red-500 cursor-pointer'>alteration </span>in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p className='text-md py-2 leading-8 text-gray-700  dark:bg-black dark:text-white'>
                  There are <span className='text-green-800 hover:text-red-500 cursor-pointer'>many variations</span> of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
             </div>
             <div className='lg:flex gap-10'>
               <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                  <Image className='m-auto' src={code} />
                  <h3 className='text-lg font-md'>Coding Language</h3>
                  <p className='py-2 text-gray-800  dark:bg-black dark:text-white'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                  </p>
                  <h4 className='text-green-600 py-4'>The Tools I Use </h4>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>Context</p>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>Hooks</p>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>State Management</p>
               </div>

               <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                  <Image className='m-auto' src={design} />
                  <h3 className='text-lg font-md'>Design Language</h3>
                  <p className='py-2 text-gray-800  dark:bg-black dark:text-white'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                  </p>
                  <h4 className='text-green-600 py-4'>The Tools I Use </h4>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>Context</p>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>Hooks</p>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>State Management</p>
               </div>

               <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                  <Image className='m-auto' src={consulting} />
                  <h3 className='text-lg font-md'>Consulting Language</h3>
                  <p className='py-2 text-gray-800  dark:bg-black dark:text-white'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                  </p>
                  <h4 className='text-green-600 py-4'>The Tools I Use </h4>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>Context</p>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>Hooks</p>
                  <p className='text-gray-800 py-1  dark:bg-black dark:text-white'>State Management</p>
               </div>

             </div>
          </section>
          <section>
             <h3 className='text-3xl py-1'>Portfolio</h3>
             <p className='text-md py-2 leading-8 text-gray-800  dark:bg-black dark:text-white'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
             </p>
             <div className='flex flex-col gap-10 lg:flex-wrap lg:flex-row'>
               <div className='basis-1/3 flex-1'>
                 <Image src={web1}/>
               </div>
               <div className='basis-1/3 flex-1'>
                 <Image src={web2}/>
               </div>
               <div className='basis-1/3 flex-1'>
                 <Image src={web3}/>
               </div>
               <div className='basis-1/3 flex-1'>
                 <Image src={web4}/>
               </div>
               <div className='basis-1/3 flex-1'>
                 <Image src={web5}/>
               </div>
               <div className='basis-1/3 flex-1'>
                 <Image src={web6}/>
               </div>
             </div>
          </section>
      </main>
    </div>
  )
}
