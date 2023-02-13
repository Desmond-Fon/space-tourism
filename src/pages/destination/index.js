import moon from "../../../public/assets/destination/image-moon.png";
import DestinationPage from "components/DestinationPage";

const Destination = () => {
  return (
    <>
      <DestinationPage
        picture={moon}
        planetName="MOON"
        planetParagraph="See our planet as you've never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you're
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites."
        distance="384,400 KM"
        time="3 DAYS"
        width="170px"
      />
    </>
  );
};

export default Destination;
