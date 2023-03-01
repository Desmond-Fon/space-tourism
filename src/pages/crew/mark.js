import CrewPage from "components/CrewPage";
import mark from "../../../public/assets/crew/image-mark-shuttleworth.png";

const Mark = () => {
  return (
    <>
      <CrewPage
        width="w-[154px] md:w-[369px] lg:w-[453px]"
        height="h-[222px] md:h-[532px] lg:h-[654px]"
        padding="lg:mr-[176px]"
        picture={mark}
        post="MISSION SPECIALIST"
        name="MARK SHUTTLEWORTH"
        description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist."
      />
    </>
  );
};

export default Mark;
