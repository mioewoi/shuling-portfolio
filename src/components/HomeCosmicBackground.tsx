import { BackgroundStars } from './BackgroundStars'
import '../home-cosmos.css'

export function HomeCosmicBackground() {
  return <div className="home-cosmos" aria-hidden="true">
    <div className="home-cosmos__scene">
      <img className="home-cosmos__nebula" src="/images/home-nebula-clouds.webp" alt="" fetchPriority="high" />
      <svg className="home-cosmos__orbits" viewBox="0 0 1440 1100" fill="none" focusable="false">
        <g stroke="currentColor" strokeWidth="1">
          <circle cx="720" cy="540" r="315" /><circle cx="720" cy="540" r="365" />
          <circle cx="720" cy="540" r="510" /><circle cx="720" cy="540" r="650" />
          <path d="M0 540H1440 M720 175V905 M404 0V1100 M1368 0V1100 M0 120L1440 960 M240 0L1260 1100 M1280 0L180 1100" />
        </g>
      </svg>
    </div>
    <BackgroundStars />
  </div>
}
