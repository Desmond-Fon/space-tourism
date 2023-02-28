import CrewPage from "components/CrewPage";
import douglas from "../../../public/assets/crew/image-douglas-hurley.png";

const Crew = () => {
  return (
    <>
      <CrewPage
        width="w-[177px] md:w-[456px]"
        height="h-[222px] md:h-[572px]"
        picture={douglas}
        name="DOUGLAS HURLEY"
        post="COMMANDER"
        description="Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2."
      />
    </>
  );
};

export default Crew;
