import Button from "./Button"

const Tile = ({ url, description, title, date }) => {
  return(

    <div className="card w-20 shadow-sm p-3 mb-5 bg-body rounded">
      <img src ={url} alt='space'/>
      <div className="card-body">
        <h1>{title}</h1>
        <h6>Date taken = {date}</h6>
        <p className="card-text"> {description}</p>
        <Button/>
      </div>
    </div>
  )
}

export default Tile;
