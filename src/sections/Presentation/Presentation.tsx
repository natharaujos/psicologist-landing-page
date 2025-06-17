import DesktopContent from "./components/DesktopContent/DesktopContent";
import MobileContent from "./components/MobileContent/MobileContent";

function Presentation() {
  return (
    <section
      id="presentation"
      className="w-full bg-creme flex items-center justify-center pt-10 pb-10 lg:px-4 
                 min-h-screen lg:pt-[88px]"
    >
      <div className="hidden lg:block">
        <DesktopContent />
      </div>
      <div className="block lg:hidden w-full">
        <MobileContent />
      </div>
    </section>
  );
}

export default Presentation;
