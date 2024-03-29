import StarIcon from './starIcon'

export default function Rating({ rating }) {
  let stars = []

  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<StarIcon key={i} fillColor={'#DA7246'} />)
    }
    else {
      stars.push(<StarIcon key={i} fillColor={'#c6c9cc'} />)
    }
  }

  return (
    <div>
      {stars} 
    </div>

  )
}
