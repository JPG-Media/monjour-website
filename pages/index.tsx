import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/Navbar'
import styles from '../src/constants/style'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#00040f] justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}

      <div className="bg-[#00040f] w-full overflow-hidden text-black">
        <div className=" sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1600px] w-full">
            <Navbar />
          </div>
        </div>
      </div>

      {/* NAVBAR */}

      <main className="flex w-full 
      text-orange-600 flex-1  flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-teko font-bold">
          Welcome to CG IAT
        </h1>

      </main>
      <div className='bg-white h-[200vh]'>

      </div>

    </div>
  )
}

export default Home
