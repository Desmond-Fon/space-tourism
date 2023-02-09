import Header from 'components/Header';
import Head from 'next/head';

const Crew = () => {
    return (<>
        <Head>
          <title>
            Space Tourism | Crew
          </title>
        </Head>
        <div className="bg-[url('../../public/assets/crew/background-crew-mobile.jpg')] md:bg-[url('../../public/assets/crew/background-crew-tablet.jpg')] lg:bg--[url('../../public/assets/crew/background-crew-desktop.jpg')] bg-center bg-cover w-screen h-screen ">
          <Header />
        </div>
        </>);
}
 
export default Crew;