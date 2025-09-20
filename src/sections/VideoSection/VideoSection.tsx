import Title from "../../shared/styles/Title";
import ScrollControlledYouTube from "../../components/ControlledVideo/ControlledVideo";

function VideoSection() {
  return (
    <section className="relative bg-pink py-16 flex justify-center">
      {/* detalhe decorativo de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200/40 to-pink-300/40 pointer-events-none"></div>

      <div className="relative w-full max-w-5xl px-4 flex flex-col items-center gap-10 text-center">
        {/* Título */}
        <div className="space-y-3">
          <Title className="text-darkBrown text-2xl sm:text-3xl lg:text-4xl font-bold">
            Você merece viver com mais leveza!
          </Title>
          <p className="text-light-brown text-base sm:text-lg max-w-2xl mx-auto">
            Assista ao vídeo abaixo e descubra como a psicoterapia pode trazer
            mais equilíbrio, bem-estar e clareza para a sua vida.
          </p>
        </div>

        {/* Container do vídeo */}
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <ScrollControlledYouTube />
          {/* glow decorativo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-200/40 to-pink-100/40 rounded-2xl blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
