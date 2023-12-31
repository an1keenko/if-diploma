import { IconProps } from './IconProps.ts'

function Arrow({ width = 50, height = 50, style }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={style}
      viewBox="0 0 144 144"
      fill="none"
    >
      <g filter="url(#filter0_d_1_3233)">
        <g filter="url(#filter1_d_1_3233)">
          <circle cx="70" cy="70" r="70" fill="white" />
        </g>
        <path
          d="M60.0891 44L54 50.0891L73.7787 69.9109L54 89.7328L60.0891 95.8219L86 69.9109L60.0891 44Z"
          fill="#000F08"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_3233"
          x="0"
          y="0"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3233" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3233" result="shape" />
        </filter>
        <filter
          id="filter1_d_1_3233"
          x="0"
          y="0"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3233" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3233" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default Arrow
