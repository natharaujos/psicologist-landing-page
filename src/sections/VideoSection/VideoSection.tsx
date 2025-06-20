import Title from '../../shared/styles/Title'
import ScrollControlledYouTube from '../../components/ControlledVideo/ControlledVideo'

function VideoSection() {
  return (
    <section className="bg-pink py-10 flex justify-center">
      <div className="w-full max-w-3xl px-4 flex flex-col items-center gap-6 rounded-2xl">
        <Title className="text-center text-darkBrown max-w-3xl mx-auto">
          Você merece viver com mais leveza!
        </Title>

        <div className="w-full aspect-video rounded-2xl overflow-hidden">
          <ScrollControlledYouTube />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
