import DestinationPage from "components/DestinationPage";
import europa from "../../../public/assets/destination/image-europa.png";

const Europa = () => {
  return (
    <>
      <DestinationPage
        picture={europa}
        planetName="EUROPA"
        planetParagraph="The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover's dream. With an icy surface, it's perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin."
        distance="628 MIL. KM"
        time="3 YEARS"
      />
    </>
  );
};

export default Europa;
