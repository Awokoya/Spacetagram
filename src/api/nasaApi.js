import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  headers: {
    Authorization: 'Client-ID dlDE77zJqZDmvt6XFHCTtNIbc7XuAcbv8aV1ndE8rbU'


  }
})