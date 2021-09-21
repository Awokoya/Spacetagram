import { Component } from 'react';
import Spinner from './components/Spinner';
import ImageList from './components/ImageList';
import "./App.css"



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isloaded: false
    }
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=2021-09-01`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        images: data,
        isloaded: true})
      });

  }
  render (){
    const { images, isloaded } = this.state;
    console.log(this.state.images.explanation)
        if(!isloaded) {
          return <Spinner/>
        }
        else {
          return (
            <div >
              <h1 className ="text-center text-white p-3">Spacetagram</h1>
              {/* <p>Brought by APOD: Astronomy Picture of the Day </p> */}
              <div className = "p-2">
              <ImageList image = {images}/>
              </div>
            </div>
          )
        }
      }
}

export default App;
