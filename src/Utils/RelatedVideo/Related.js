import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import './related.css'

const Related = () => {
  const state=useContext(Context)
  return (
    <>    
{state.RelatedVideo?
state.RelatedVideo[0]?.contents?.map((elem,i)=>{
return <Link key={i} onClick={()=>{state.VideoFetch(elem.video.videoId)}} to={`/video/${elem.video.videoId}`}>
<div className='related-video' key={i}>
        <div className='related-thumbnail'>
          <img src={elem.video.thumbnails[0].url}/>
        </div>
        <div className='related-video-content'>
            <b>{elem.video.title}</b>
            <div>{elem.video.author.title}</div>
            <div className='views-ago'>
                <span>{elem.video.stats.views} views</span>
                &nbsp;&nbsp;&nbsp;
                <span>{elem.video.publishedTimeText}</span>
            </div>
        </div>

</div>
</Link>
}):""}

</>

  )
}

export default Related