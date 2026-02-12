const AetheriaLogo = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="28" stroke="url(#ring)" strokeWidth="3" />
    <ellipse cx="60" cy="60" rx="48" ry="16" stroke="url(#orbit)" strokeWidth="4" transform="rotate(-20 60 60)" />
    <circle cx="88" cy="40" r="5" fill="#00F0FF" />
    <defs>
      <linearGradient id="ring" x1="25" y1="30" x2="90" y2="95">
        <stop stopColor="#00F0FF" />
        <stop offset="1" stopColor="#7000FF" />
      </linearGradient>
      <linearGradient id="orbit" x1="10" y1="60" x2="110" y2="60">
        <stop stopColor="#7000FF" />
        <stop offset="1" stopColor="#00F0FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default AetheriaLogo
