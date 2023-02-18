import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import './tab.css'
const Tabs = () => {
  const [scroll,setScroll]=useState('');
    const tabs=['Dramas','Education','Science','health','Gaming','News','Sports','Music','Entertainment','Dramas','Education','Science','health','Gaming','News','Sports','Music','Entertainment']
    const arrowRight=(type)=>{
    let tabsArea=document.querySelector('.tabs-tag');
    if(type==='right'){
     tabsArea.scrollLeft-=100;
    setScroll(tabsArea.scrollLeft)
  }
  if(type==='left'){
  return tabsArea.scrollLeft+=100;
}
    }

      const active=(e)=>{
    let tags=document.querySelectorAll('.tags');
    tags.forEach(elem=>{
        elem.classList.remove('active');
    });
    e.currentTarget.classList.add('active')
  }
    return (
<div className='tabsstyle'>
  <div className='arrows' style={{marginLeft:'30px'}}>
  <MdKeyboardArrowLeft onClick={()=>{arrowRight('right')}} />
</div>
    <div className='tabs-tag'>
        {
            tabs.map((item,i)=>{
                return <div key={i} className='tags' onClick={(e)=>{active(e)}}>{item}</div>
            })
        }
    </div>
    <div className='arrows' style={{
    boxShadow: "20px 0px 17px 20px #fff"
    }}>
      <MdKeyboardArrowRight onClick={()=>{arrowRight('left')}}/>
    </div>
        </div>

  )
}

export default Tabs