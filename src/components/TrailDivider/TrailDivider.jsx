import './TrailDivider.css'

export default function TrailDivider({ label }) {
  return (
    <div className="trail-divider" role="separator" aria-hidden="true">
      <svg
        className="trail-divider__svg"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 30 C 150 5, 250 55, 400 30 S 650 5, 800 30 S 1050 55, 1200 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
      </svg>
      {label && <span className="trail-divider__label">{label}</span>}
    </div>
  )
}
