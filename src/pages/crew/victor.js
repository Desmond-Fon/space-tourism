import CrewPage from "components/CrewPage";
import victor from "../../../public/assets/crew/image-victor-glover.png";

const Victor = () => {
  return (
    <>
      <CrewPage
        width="w-[181px] md:w-[433px] lg:w-[554px]"
        height="h-[222px] md:h-[532px] lg:h-[681px]"
        padding="lg:mr-[140px]"
        picture={victor}
        post="PILOT"
        name="VICTOR GLOVER"
        description="Pilot on the first operational flight of the SpaceX Crew Dragon to the
    International Space Station. Glover is a commander in the U.S. Navy
    where he pilots an F/A-18.He was a crew member of Expedition 64, and
    served as a station systems flight engineer."
      />
    </>
  );
};

export default Victor;
