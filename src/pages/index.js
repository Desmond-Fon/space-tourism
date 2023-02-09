import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/Header'


export default function Home() {
  return (<>
    <Head>
      <title>
        Space Tourism | Home
      </title>
    </Head>
    <div className="bg-[url('../../public/assets/home/background-home-mobile.jpg')] md:bg-[url('../../public/assets/home/background-home-tablet.jpg')] lg:bg--[url('../../public/assets/home/background-home-desktop.jpg')] bg-center bg-cover w-screen h-screen ">
      <Header />
    </div>
    </>
  )
}
