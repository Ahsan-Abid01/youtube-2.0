import React,{useContext} from 'react'
import './ChannelVideo.css';
import {BiLike,BiDislike} from 'react-icons/bi';
import {BsThreeDots} from 'react-icons/bs';
import {IoMdShareAlt} from 'react-icons/io'
import { Context } from '../../Context/Context';

const VideoChannel = () => {
  const state = useContext(Context)
  const Subscribe=(e)=>{
    if(e.target.innerText==='Subscribe'){
      e.target.innerText=`Subscribed`;
      e.target.classList.add('subscribed');
      let img=document.createElement('img')
      img.src='./assets/bell.png';
      img.classList.add('bell')
      e.target.appendChild(img)
      return
    }
    e.target.classList.remove('subscribed');
    e.target.innerText=`Subscribe`;
  }
  return (
<>
    {state.VideoDetail?
      state.VideoDetail.map((elem,i)=>{
        return <div key={i}>
          <div className='video-title'>{elem?.title}</div>
          <div className='channel-demo'>
          <div  className='channel-avatar'>
          <img src={elem?.author?.avatar[0]?.url} alt='avatar'/>
        <div style={{marginLeft:"5px",fontWeight:'700'}}>
        {elem?.author?.title}
        <br/>
        <span className='channel-subscribed'>{elem?.author?.stats?.subscribersText}</span>
      </div>
        </div>
        <div className='area_view'>
        <div className='subscribe-btn'>
          <button onClick={(e)=>Subscribe(e)}>Subscribe</button>
          </div>
     <div className='react'>
      <button className='like'><BiLike/> {state.converter(elem?.stats?.likes)}</button>
      |
      <button className='dislike'><BiDislike/></button>

     </div>
     <div className='share'>
      <button> <IoMdShareAlt/> Share</button>
     </div>
     <div className='dots'>
      <button><BsThreeDots/></button>
     </div>
        </div>
        </div>
        </div>
      }):""
    }
    </>
  )
}

export default VideoChannel;