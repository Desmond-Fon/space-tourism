import Header from 'components/Header';
import Head from 'next/head';

const Destination = () => {
    return ( <>
        <Head>
          <title>
            Space Tourism | Destination
          </title>
        </Head>
        <div className="bg-[url('../../public/assets/destination/background-destination-mobile.jpg')] md:bg-[url('../../public/assets/destination/background-destination-tablet.jpg')] lg:bg--[url('../../public/assets/destination/background-destination-desktop.jpg')] bg-center bg-cover w-screen h-screen ">
          <Header />
        </div>
        </>);
}
 
export default Destination;