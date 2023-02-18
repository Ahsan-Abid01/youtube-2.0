import React ,{useEffect}from 'react'
import { Link } from 'react-router-dom';
import {AiFillHome,AiOutlineCopyright} from 'react-icons/ai'
import {SiYoutubemusic} from 'react-icons/si'
import {FiSettings} from 'react-icons/fi'
import {CiTrophy} from 'react-icons/ci'
import {RiVideoLine,RiFeedbackLine} from 'react-icons/ri'
import {BiLike,BiNews,BiHelpCircle} from 'react-icons/bi'
import {HiOutlineFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BsMusicNote,BsFlag} from 'react-icons/bs'
import {MdPlaylistPlay,MdSubscriptions,MdOutlineVideoLibrary,MdHistory,MdOutlineWatchLater} from 'react-icons/md'
import './sidebar.css'
const Sidebar = () => {
  const tabsTrigger=()=>{
  let tabs=document.querySelectorAll('.sidetabs');
    tabs.forEach(elem=>{
      elem.addEventListener('click',(e)=>{
        tabs.forEach(item=>{
          if(item.classList.contains('active'))
          {
            item.classList.remove('active')
        }});
      e.target.classList.add('active')
    })
  })
}
useEffect(() => {
  tabsTrigger()

}, [])

  return (
    <div className='sidebar'>
        <div className='tabs-view hide'>
          <Link to={'/'}><li className='sidetabs'><AiFillHome/></li></Link>
          <Link to={'/'}><li className='sidetabs'><SiYoutubemusic/></li></Link>
          <Link to={'/'}><li className='sidetabs'><MdSubscriptions/></li></Link>
          <Link to={'/'}><li className='sidetabs sideshow'><MdOutlineVideoLibrary/></li></Link>
          <Link to={'/'}><li className='sidetabs sideshow'><MdHistory/></li></Link>
        </div>
        <div className='tabsHider'>
        <div className='tabs'>
          <div>
          <Link to={'/'}><li className='sidetabs active sideshow'><AiFillHome/>Home</li></Link>
          <Link to={'/'}><li className='sidetabs sideshow'><SiYoutubemusic/>Shorts</li></Link>
          <Link to={'/'}><li className='sidetabs sideshow'><MdSubscriptions/>Subscription</li></Link>
        
        <hr/>
          </div>

        </div>

        <div className='user-tabs'>
          <Link to={'/'}><li className='sidetabs sideshow'><MdOutlineVideoLibrary/>Library</li></Link>
          <Link to={'/'}><li className='sidetabs sideshow'><MdHistory/>History</li></Link>
          <Link to={'/'}><li className='sidetabs'><RiVideoLine/>Your Video</li></Link>
          <Link to={'/'}><li className='sidetabs'><MdOutlineWatchLater/>Watch Later</li></Link>
          <Link to={'/'}><li className='sidetabs'><BiLike/>Like</li></Link>
          <Link to={'/'}><li className='sidetabs'><MdPlaylistPlay/>PlayList</li></Link>

        </div>
        <hr/>

        <div className='explore'>
            <h3>Explore</h3>
          <Link to={'/'}><li className='sidetabs'><HiOutlineFire/>Trending</li></Link>
          <Link to={'/'}><li className='sidetabs'><BsMusicNote/>Music</li></Link>
          <Link to={'/'}><li className='sidetabs'><SiYoutubegaming/>Gaming</li></Link>
          <Link to={'/'}><li className='sidetabs'><BiNews/>News</li></Link>
          <Link to={'/'}><li className='sidetabs'><CiTrophy/>Sport</li></Link>
        </div>
        <hr/>

        <div className='setting'>
          <Link to={'/'}><li className='sidetabs'><FiSettings/>Setting</li></Link>
          <Link to={'/'}><li className='sidetabs'><BsFlag/>Report history</li></Link>
          <Link to={'/'}><li className='sidetabs'><BiHelpCircle/>help</li></Link>
          <Link to={'/'}><li className='sidetabs'><RiFeedbackLine/>Feedback</li></Link>

        </div>
        <hr/>

        <span><AiOutlineCopyright/>2023 Google LLC</span>
        </div>
    </div>
  )
}

export default Sidebar;