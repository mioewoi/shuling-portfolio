import { BackgroundStars } from './BackgroundStars'
import '../home-cosmos.css'

export function HomeCosmicBackground() {
  return <div className="home-cosmos" aria-hidden="true">
    <div className="home-cosmos__scene">
      <img className="home-cosmos__nebula" src="/images/星空背景.png" alt="" fetchPriority="high" />
      <svg className="home-cosmos__orbits" viewBox="0 0 1440 1100" preserveAspectRatio="xMidYMin meet" fill="none" focusable="false">
        <g stroke="currentColor" strokeWidth="1">
          {/* One design-space composition: axis intersection at (720, 536). */}
          {[292, 336, 404, 516, 598, 628].map(radius => <circle key={radius} cx="720" cy="536" r={radius} />)}
          <path d="M0 536H1440 M720 200V940 M430 0V1100 M1320 0V1100 M0 120L1440 952 M184 0L1284 1100 M1256 0L156 1100" />
        </g>
        <g className="home-cosmos__coordinates" fill="currentColor">
          <text x="72" y="532">18.3907° S，121.6683° W</text>
          <text x="1368" y="532" textAnchor="end">18.3907° S，121.6683° E</text>
        </g>
      </svg>
    </div>
    <BackgroundStars />
  </div>
}
