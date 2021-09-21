import Tile from "./ImageTile";

const ImageList = ({ image }) => {
    
    return(
      <div>
      {
      image.map((data,i)  => {
        return (
        <Tile
        key = {i}
        url = {image[i].url}
        description = {image[i].explanation}
        title = {image[i].title}
        date = {image[i].date} />
        )
    })
  }
  </div>
    )
}


export default ImageList;
