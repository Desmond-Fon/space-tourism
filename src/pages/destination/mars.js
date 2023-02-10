import Header from 'components/Header';
import Head from 'next/head';
import Image from 'next/image';
import moon from '../../../public/assets/destination/image-moon.png';
import Link from 'next/link';
import mars from '../../../public/assets/destination/image-mars.png';
import europa from '../../../public/assets/destination/image-europa.png';
import titan from '../../../public/assets/destination/image-titan.png';

const Mars = () => {
    return ( <>
        <Head>
          <title>
            Space Tourism | Destination
          </title>
        </Head>
        <div className="bg-[url('../../public/assets/destination/background-destination-mobile.jpg')] md:bg-[url('../../public/assets/destination/background-destination-tablet.jpg')] lg:bg--[url('../../public/assets/destination/background-destination-desktop.jpg')] bg-center bg-cover w-screen h-screen ">
          <Header />
          <h1 className='mt-[24px] mb-[32px] text-center font-barlow text-cream tracking-[2.7px] leading-[19.2px] text-[16px]'><span className='pr-[10px] opacity-[0.25] font-bold'>01</span>PICK YOUR DESTINATION</h1>

          <div className='flex justify-center items-center mb-[26px]'>
          <Image src={mars} alt='' className='w-[170px] h-[170px]'/>
          </div>

          <div className='text-skyBlue font-barlow tracking-[2.36px] leading-[16.9px] text-[14px] flex justify-center items-center'>
            <Link href='/destination' className=' hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream'>MOON</Link>
            <Link href='/destination/mars' className='ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream'>MARS</Link>
            <Link href='/destination/europa' className='ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream'>EUROPA</Link>
            <Link href='/destination.titan' className='ml-[27px] hover:border-b-[3px] hover:border-skyBlue cursor-pointer pb-[8px] active:text-cream active:border-cream'>TITAN</Link>
          </div>



        </div>
        </>);
}
 
export default Mars;