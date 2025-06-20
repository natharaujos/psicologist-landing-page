import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    YT: typeof YT
    onYouTubeIframeAPIReady: () => void
  }
}

export default function ScrollControlledYouTube() {
  const playerRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [player, setPlayer] = useState<YT.Player | null>(null)

  useEffect(() => {
    // Load YouTube IFrame API script if not present
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)

      window.onYouTubeIframeAPIReady = () => {
        createPlayer()
      }
    } else {
      createPlayer()
    }

    function createPlayer() {
      if (!playerRef.current) return

      new window.YT.Player(playerRef.current, {
        videoId: 'oWN7ewJV-cY',
        playerVars: {
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          mute: 1, // muted to allow autoplay
          controls: 1,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target)
          },
        },
      })
    }
  }, [])

  useEffect(() => {
    if (!player || !containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            player.playVideo()
          } else {
            player.pauseVideo()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [player])

  return (
    <div ref={containerRef} className="w-full h-full">
      <div ref={playerRef} id="youtube-player" className="w-full h-full" />
    </div>
  )
}
