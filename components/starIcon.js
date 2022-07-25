export default function StarIcon({
  size = 25,
  strokeColor = 'none',
  fillColor = 'gray',
  storkeWidth = 0,
  className = 'star-svg',
  style = { display: 'inline' }
}) {
  return (
    <svg fill={fillColor} width={size} height={size} viewBox='0 0 24 24' className={className} style={{ ...style }}>
      <path
        fill={fillColor}
        stroke={strokeColor}
        strokeMiterlimit='10'
        strokeWidth={storkeWidth}
        d='M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z'
      />
    </svg>
  )
}
