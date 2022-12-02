import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY,imageurl} from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlid,setUrld]=useState('')

  useEffect(() => {
    axios.get(props.url).then(Response=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
   const handleMovie=(id)=>{
    console.log(id)
     axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrld(response.data.results[0])
      }else{
        console.log(('Trailer not avilable'))
      }

     })

   }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallposter': 'poster'} src={`${imageurl+obj.backdrop_path}`} alt="" />
          )}
        </div>
     { urlid && <Youtube opts={opts} videoId={urlid.key} />}

    </div>
  )
}

export default Rowpost