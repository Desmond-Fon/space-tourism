import CrewPage from "components/CrewPage";
import anousheh from "../../../public/assets/crew/image-anousheh-ansari.png";

const Anousheh = () => {
  return (
    <>
      <CrewPage
        width="w-[226px] md:w-[540px] lg:w-[615.5px]"
        height="h-[222px] md:h-[532px] lg:w-[607px]"
        padding="lg:mr-[90px]"
        picture={anousheh}
        name="ANOUSHEH ANSARI"
        post="FLIGHT ENGINEER"
        description="Anousheh Ansari is an Iranian American engineer and co-founder of
    Prodea Systems. Ansari was the fourth self-funded space tourist, the
    first self-funded woman to fly to the ISS, and the first Iranian in
    space."
      />
    </>
  );
};

export default Anousheh;
