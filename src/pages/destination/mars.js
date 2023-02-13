import DestinationPage from "components/DestinationPage";
import mars from "../../../public/assets/destination/image-mars.png";

const Mars = () => {
  return (
    <>
      <DestinationPage
        picture={mars}
        planetName="MARS"
        planetParagraph="Don't forget to pack your hiking boots. You'll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It's
          two and a half times the size of Everest!"
        distance="225 MIL. KM"
        time="9 MONTHS"
      />
    </>
  );
};

export default Mars;
