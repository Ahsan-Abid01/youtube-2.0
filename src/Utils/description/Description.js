import React, { useContext } from 'react'
import { Context } from '../../Context/Context';
import './description.css';
const Description = () => {
        const state=useContext(Context)
        const seeMore=(e)=>{
            let des=document.querySelector('.description');
        let desc=document.querySelector('.brief-description');
        if(e.target.innerText==='See More'){
        e.target.innerText='See Less' 
        desc.classList.add('more');
        des.classList.add('active');
        return
        }
        desc.classList.remove('more');
        des.classList.remove('active');
        e.target.innerText='See More' 


    }

  return (
    <>
    {state.VideoDetail?state.VideoDetail.map((elem,i)=>{
    return <div className='description' key={i}>
        <span className='video-views'>{state.converter(elem?.stats?.views)}Views</span>
        &nbsp;&nbsp;
        <span className='video-days'>{elem?.publishedDate}</span>
           
        <div className='brief-description'>
          {elem?.description}
        </div>
<span onClick={(e)=>seeMore(e)} style={{cursor:"pointer"}}>See More</span>
    </div>
  }):""}
  </>
  )
}

export default Description;