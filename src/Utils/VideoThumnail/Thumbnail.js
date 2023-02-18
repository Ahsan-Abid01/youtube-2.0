import React, { useContext,useEffect ,useState} from 'react'
import './thumnail.css'
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
const Thumbnail = () => {
    const state = useContext(Context);
      useEffect(()=>{
          state.fetchVideo()
      },[])

      return (
        <> 
    <div className='browse-videos' style={{height:"1000px"}}>
      {state.BrowseVideo?.contents?state.BrowseVideo.contents?.map((item,i)=>{
            return <Link key={i} onClick={()=>{state.VideoFetch(item?.video?.videoId)}} to={`/video/${item?.video?.videoId}`}>
              <div className='thumbnail' key={i}>
            <div className='thumbnail-img'><img src={item?.video?.thumbnails[0]?.url}/></div>
            <div className='channel-avatar'>
              <div  className='avatar'>
              <img src={item?.video?.author?.avatar[0]?.url} alt='avatar'/>
              </div>
            <div className='title'>{item?.video?.title}
            <br/>
            <br/>
            <span className='channel-name'>{item?.video?.author?.title}</span>
            </div>
            </div>
            <div className='views'>
                <div className='view'>{item?.video?.stats?.views>=1000<=9999?String(item?.video?.stats?.views).slice(0,3)+"K":item.video.stats.views} views</div>
                &nbsp;&nbsp;&nbsp;
    
                <div className='ago'>{item?.video?.publishedTimeText}</div>
            </div>
            </div></Link>}):new Array(8).fill('').map((elem,i)=>{
            return<div className='box refresh' key={i}>
           <div className='boximg refresh'>{elem}</div>
           <div className='channel-brand'>
           <div className='boxavatar refresh'></div>
           <div className='title'>
           <div className='boxtitle refresh'></div>
           <div className='boxtitle refresh'></div>
           </div>
           </div>
           </div>})
      }
        </div>
       </>

  )
}

export default Thumbnail;
      //  