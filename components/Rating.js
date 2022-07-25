import StarIcon from './StarIcon'

export default function Rating({ rating }) {
  let stars = []

  /*TODO: make more functional and stylish? */
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
