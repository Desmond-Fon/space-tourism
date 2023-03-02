import TechnologyPage from "components/TechnologyPage";
import spaceport from "../../../public/assets/technology/image-spaceport-landscape.jpg";
import desktop from "../../../public/assets/technology/image-spaceport-portrait.jpg";

const Spaceport = () => {
  return (
    <>
      <TechnologyPage
        picture={spaceport}
        desktopPicture={desktop}
        tech="SPACEPORT"
        techParagraph="A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth's rotation for launch."
      />
    </>
  );
};

export default Spaceport;
