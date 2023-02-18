import React, { useContext } from "react";
import "./header.css";
import {FiSearch,FiMenu} from 'react-icons/fi'
import {BiVideoPlus} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
import {MdNotificationsNone} from 'react-icons/md';
import { Context } from "../../Context/Context";

const Header = () => {
  const {handleSubmit}=useContext(Context);
  const state=useContext(Context);
  const toggle=()=>{
    let sidebar=document.querySelector('.tabsHider');
  let tabs1=document.querySelector('.tabs-view');
    if(sidebar.classList.contains('hide')){
       sidebar.classList.remove('hide');
       tabs1.classList.add('hide');
       return
     }
  sidebar.classList.add('hide')
  tabs1.classList.remove('hide')
  }
  //Searchbar result

 

  return <div className="header">
    <div className="header-logo menu">
      <FiMenu onClick={()=>{toggle()}}/>
        <img src={'/assets/logo.png'} alt="logo"/>
    </div>
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
      <input type={'text'} placeholder='Search' className="search-feild" onChange={(e)=>{state.searchQuery(e)}}/>
      <button className="search-icon">
        <FiSearch/>
      </button>
      </form>
    </div>
    <div className="account">
      <BiVideoPlus/>
      <MdNotificationsNone/>
      <FaUserCircle/>

    </div>

        </div>;
};

export default Header;
