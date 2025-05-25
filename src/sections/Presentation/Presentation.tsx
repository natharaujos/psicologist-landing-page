import DesktopContent from "./components/DesktopContent/DesktopContent";
import MobileContent from "./components/MobileContent/MobileContent";

function Presentation() {
  return (
    <section
      id="presentation"
      className="xl:h-[700px] lg:h-[550px] xs:h-[690px] w-full bg-creme flex items-center justify-center lg:pt-[88px] "
    >
      <div className="hidden lg:block">
        <DesktopContent />
      </div>
      <div className="block lg:hidden">
        <MobileContent />
      </div>
    </section>
  );
}

export default Presentation;
