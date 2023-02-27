import Header from "components/Header";
import TechnologyPage from "components/TechnologyPage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import vehicle from "../../../public/assets/technology/image-launch-vehicle-landscape.jpg";

const Technology = () => {
  return (
    <>
      <TechnologyPage
        picture={vehicle}
        tech="LAUNCH VEHICLE"
        techParagraph="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      />
    </>
  );
};

export default Technology;
