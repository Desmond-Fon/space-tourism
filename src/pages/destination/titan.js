import DestinationPage from "components/DestinationPage";
import titan from "../../../public/assets/destination/image-titan.png";

const Titan = () => {
  return (
    <>
      <DestinationPage
        picture={titan}
        planetName="TITAN"
        planetParagraph="The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn."
        distance="1.6 BIL KM"
        time="7 YEARS"
      />
    </>
  );
};

export default Titan;
