import React,{useContext} from 'react'
import {MdSort,MdSend} from 'react-icons/md'
import {BiLike,BiDislike} from 'react-icons/bi'
import './comment.css';
import { Context } from '../../Context/Context';
import { FaUser } from 'react-icons/fa';

const Comments = () => {
    const state=useContext(Context);
    const commentOption=()=>{
        let sort=document.querySelector('.comment-sort');
        sort.classList.toggle('sorted')
    }

  return (
    <>
    {state.VideoComments[0]?
    <>   
    <div className='comment-option'>
     <span>{state.VideoComments[0]?.totalCommentsCount} Comments</span>
     <span> <MdSort onClick={commentOption}/>Sort By</span>
     <div className='comment-sort'>
         <li>Top Comment</li>
         <li>Newest First</li>
     </div>
    </div>
        <div className='comments'>
     <form>
         <FaUser/>
         <input type={'text'} placeholder='Add a Comment...'/>
         <button><MdSend/></button>
     </form>
     </div>
     </>
     :""
}
{state.VideoComments[0]?.comments?
state.VideoComments[0]?.comments.map(elem=>{
    return  <div className='comment'>
    <div className='user-comment'>
    <img src={elem?.author?.avatar[0]?.url}/>
    <label><b>{elem?.author?.title}</b></label>
    <label>{elem?.publishedTimeText}</label>
    </div>
    <div className='comment-content'>{elem?.content}
    <div className='comments-like'>
        <BiLike/>{elem?.stats?.votes}
        <BiDislike/>
        <span>{elem?.stats?.replies} Reply</span>
    </div>
    </div>
</div>
}):""}
   
</>
  )
}

export default Comments;