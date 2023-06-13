import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { Inter } from '@next/font/google'


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
          </section>
      </main>
    </>
  )
}
