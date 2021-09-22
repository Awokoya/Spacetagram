import Tile from "./ImageTile";
import { useState, useEffect } from "react";

const ImageList = ({ image }) => {
    const [likes, addLikes] = useState((localStorage.getItem('likedArray') !== null)?
    localStorage.getItem('likedArray').split(" "):'');
    let likedArray = likes;
    const setLikes = (id, type) => {
      console.log('here', type)
      if (type === 1) {
        // addLikes(prev => [...prev, id]);
      }
      else {
        likedArray = likes;
        let index =likedArray.indexOf(id)
        likedArray.splice(index, 1)
        // addLikes([...likedArray]);
      }
    }

    useEffect(() => {
      console.log('useeff called', likes)
          localStorage.setItem('likedArray', likes.toString())
    }, [likes, addLikes])

    return(
      <div>
      {
      image.map((data,i)  => {
        return (
        <Tile
        key = {i}
        id = {i}
        url = {image[i].url}
        description = {image[i].explanation}
        title = {image[i].title}
        date = {image[i].date} 
        addtoLiked = {setLikes}
        isliked= {likes.includes(i) ? true : false}/>
        )
    })
  }
  </div>
    )
}


export default ImageList;
