interface LogoProps {
  size?: number
  ringColor?: string
}

export default function Logo({ size = 38, ringColor = '#061A2E' }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      <g fill="#00C2FF">
        <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(90 60 60)"></rect>
        <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(210 60 60)"></rect>
        <rect x="53" y="6" width="14" height="108" rx="7" transform="rotate(330 60 60)"></rect>
      </g>
      <circle cx="60" cy="60" r="16" fill={ringColor}></circle>
      <circle cx="60" cy="60" r="16" fill="none" stroke="#00C2FF" strokeWidth="5"></circle>
      <circle cx="60" cy="60" r="5.5" fill="#A8E600"></circle>
    </svg>
  )
}
