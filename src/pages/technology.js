import Header from 'components/Header';
import Head from 'next/head';

const Technology = () => {
    return ( <>
        <Head>
          <title>
            Space Tourism | Technology
          </title>
        </Head>
        <div className="bg-[url('../../public/assets/technology/background-technology-mobile.jpg')] md:bg-[url('../../public/assets/technology/background-technology-tablet.jpg')] lg:bg--[url('../../public/assets/technology/background-technology-desktop.jpg')] bg-center bg-cover ">
          <Header />
        </div>
        </>);
}
 
export default Technology;