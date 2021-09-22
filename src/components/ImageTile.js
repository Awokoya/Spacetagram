import LikeButton from "./LikeButton"
import './imageTile.css'
import { useState } from "react"

const Tile = ({ url, description, title, date, addtoLiked, id, isLiked }) => {
  const [like, setLike] = useState(false);
  let display;
  const LikePicture = () => {
    setLike(!like);
  }

  console.log(url)
  let type = url.includes('.jpg') ? 'picture' : 'video'

      display = (type === 'picture') ? (
        <img src={url}
          alt='APOD: Astronomy Picture of the Day' />
      ) :
        <iframe src={url} width="auto" height="auto" controls>
        </iframe>

      return (

        <div className="card bg-light p-5 mb-5"
          style={{ maxWidth: "50rem" }}
        >
          {display}

          <div className="card-body">
            <h1>{title}</h1>
            <p className="card-text"> {description}</p>
            <h6 style={{ color: "gray" }}>{date}</h6>
            <LikeButton onClickFunc={LikePicture} currentLike={like} />
          </div>
        </div>
      )
  }

export default Tile;
