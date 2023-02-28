import CrewPage from "components/CrewPage";
import anousheh from "../../../public/assets/crew/image-anousheh-ansari.png";

const Anousheh = () => {
  return (
    <>
      <CrewPage
        width="w-[226px] md:w-[540px]"
        height="h-[222px] md:h-[532px]"
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
