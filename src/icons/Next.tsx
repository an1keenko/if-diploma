import { IconProps } from './IconProps.ts'

function Next({ width = 10, height = 10, style }: IconProps) {
  return (
    <svg width={width} height={height} style={style} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.4822 11.5516L7.16058 0.200447C6.89401 -0.0668158 6.4665 -0.0668158 6.19993 0.200447C5.93336 0.46771 5.93336 0.89634 6.19993 1.1636L17.0387 12.0306L6.19993 22.8976C5.93336 23.1649 5.93336 23.5935 6.19993 23.8608C6.3307 23.9919 6.50673 24.0625 6.67774 24.0625C6.84874 24.0625 7.02478 23.9969 7.15555 23.8608L18.4772 12.5097C18.7437 12.2475 18.7437 11.8138 18.4822 11.5516Z"
        fill="#000F08"
      />
    </svg>
  )
}

export default Next
