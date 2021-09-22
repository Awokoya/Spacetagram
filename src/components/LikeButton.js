import { Icon} from "@blueprintjs/core";
import { useState } from "react";


const LikeButton = ({currentLike, onClickFunc}) => {


  return (
    <button 
    onClick = {onClickFunc}
    className="btn btn-outline-dark"
    >  
      <Icon icon="heart" size={20} color ={currentLike ? 'red':'gray'}/>
    {`${currentLike ? "Liked" : "Like"}`}  
    </button>
  )
}


export default LikeButton;