import InfosAboutMe from "./components/InfosAboutMe/InfosAboutMe";
import PictureAboutMe from "./components/PictureAboutMe/PictureAboutMe";

function AboutMe() {
  return (
    <div id="aboutme" className="flex justify-center bg-creme gap-5">
      <section className="h-[100vh] xs:h-[1300px] md:h-[1000px] lg:h-[1000px] 2xl:h-[900px]  w-3/4 2xl:w-4/6 xs:w-full bg-pink flex items-center lg:rounded-2xl">
        <div className="flex justify-center items-center py-5 lg:px-10 xs:px-2  sm:flex-wrap xs:flex-col">
          <div className="w-1/2 flex justify-center items-start h-full sm:w-full xs:w-full">
            <PictureAboutMe />
          </div>

          <div className="w-1/2 h-full sm:w-full xs:w-full">
            <InfosAboutMe />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
