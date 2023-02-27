import Header from "components/Header";
import TechnologyPage from "components/TechnologyPage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import capsule from "../../../public/assets/technology/image-space-capsule-landscape.jpg";

const Vehicle = () => {
  return (
    <>
      <TechnologyPage
        picture={capsule}
        tech="SPACE CAPSULE"
        techParagraph="A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings.
          Our capsule is where you'll spend your time during the flight. It
          includes a space gym, cinema, and plenty of other activities to keep
          you entertained."
      />
    </>
  );
};

export default Vehicle;
