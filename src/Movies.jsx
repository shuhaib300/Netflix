import React, { useEffect, useState } from 'react'
import axios from './axios'
import { API_KEY, imageUrl } from './Constants'
import "./index.css"
import YouTube from 'react-youtube'

function Movies() {
    const [action, setAction] = useState([])
    const [adventure, setAdventure] = useState([])
    const [animation, setAnimation] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(()=>{
        axios.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=28&with_watch_monetization_types=flatrate`).then((res)=>{
            setAction(res.data.results);

        })

    })

    useEffect(()=>{
        axios.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=12&with_watch_monetization_types=flatrate`).then((res)=>{
            setAdventure(res.data.results);
            // console.log(res.data.results);
        })
    })

    useEffect(()=>{
        axios.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=16&with_watch_monetization_types=flatrate`).then((res)=>{
            setAnimation(res.data.results);
            // console.log(res.data.results);
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleMovie=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
           if(res.data.results.length!==0){
            setUrlId(res.data.results[0])
           } else{
            console.log("Empty Array");
            <h1>Trailer is not Available</h1>
           }
        })

      }
  return (
    <div className='main'>
        
        <div className='bg2'>
            
        <div className='fade_top'></div>
            <div className='2content'>
                <h3 className='content20'>Unlimited movies, TV shows and more.</h3>
            </div>

        <div className="fade_bottom"></div>
        </div>
        {urlId &&    <YouTube opts={opts} videoId={urlId.key}/>   }
        <div className="posters">
        <h3>Action Movies</h3>
            <div className="poster">
                
                {action.map((item)=>{
                    return(
                 
                <img onClick={()=>handleMovie(item.id)} className='imgposter' src={imageUrl+item.backdrop_path} alt="" />
                       
                )
            })}
            </div>
        {/* {urlId &&    <YouTube opts={opts} videoId={urlId.key}/>   } */}
        </div>

        <div className="posters2">
        <h3>Adventure Movies</h3>
            <div className="poster2">
                
                {adventure.map((items)=>{
                    return(
                 
                <img onClick={()=>handleMovie(items.id)} className='imgposter2' src={imageUrl+items.backdrop_path} alt="" />
                       
                )
            })}
            </div>
            {/* {urlId &&    <YouTube opts={opts} videoId={urlId.key}/>   } */}
        </div>

        <div className="posters3">
        <h3>Animation Movies</h3>
            <div className="poster3">
                
                {animation.map((items)=>{
                    return(
                 
                        <img onClick={()=>handleMovie(items.id)} className='imgposter3' src={imageUrl+items.backdrop_path} alt="" />
                       
                )
            })}
            </div>
            {/* {urlId &&    <YouTube opts={opts} videoId={urlId.key}/>   } */}
        </div>
        
    </div>
  )
}

export default Movies