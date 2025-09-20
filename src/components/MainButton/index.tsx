import { LINK } from "../../shared/constants/Links";

function ScheduleSessionButton() {
  return (
    <button
      className="bg-[#8B2635] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#7A1F2D] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      onClick={() => window.open(LINK.whatsapp, "_blank")}
    >
      Agendar Minha Sessão
    </button>
  );
}

export default ScheduleSessionButton;
