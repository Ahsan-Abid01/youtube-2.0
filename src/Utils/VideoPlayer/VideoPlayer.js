import React ,{useContext,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../../Context/Context';
import VideoChannel from '../ChannelBrand/VideoChannel';
import Comments from '../Comments/Comments';
import Description from '../description/Description';
import Related from '../RelatedVideo/Related';
import "./videoPlayer.css"
const VideoPlayer = () => {
  const {id}=useParams()
  const state=useContext(Context);
  useEffect(() => {
    state.VideoFetch(id)
 state.FetchDetail(id);
 state.FetchComments(id);
 state.FetchRelated(id)
  }, []);
  
  return (
    <div className='videoPlayer'>
      <div>
        {state?.videoURL?.adaptiveFormats?
        <div>
    <video  controls className='video' src={state?.videoURL?.adaptiveFormats[0]?.url} autoPlay>
    </video>
        </div>
        :""}
    <VideoChannel/>
    <Description/>
    <Comments/>
    </div>
    <div>
      <Related/>
    </div>
    </div>
  )
}

export default VideoPlayer;