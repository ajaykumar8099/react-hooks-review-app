// Write your code here
import {useState} from 'react'

import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props

  const [index, setIndex] = useState(0)

  const displayItem = reviewsList[index]
  const {imgUrl, username, companyName, description} = displayItem

  const onClickRight = () => {
    if (index < reviewsList.length - 1) {
      setIndex(index + 1)
    }
  }

  const onClickLeft = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <div className="container">
      <div className="left-btn-cont">
        <button type="button" data-testid="leftArrow" onClick={onClickLeft}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="left"
          />
        </button>
      </div>
      <div className="content">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
      <div className="right-btn-cont">
        <button type="button" data-testid="rightArrow" onClick={onClickRight}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="right"
          />
        </button>
      </div>
    </div>
  )
}
export default ReviewsCarousel
