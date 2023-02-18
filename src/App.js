
import React from "react";
import { Route, Routes} from "react-router-dom";
import Header from "./Utils/header/Header";
import Sidebar from "./Utils/sidebar/Sidebar";
import Tabs from "./Utils/tabs/Tabs";
import VideoPlayer from "./Utils/VideoPlayer/VideoPlayer";
import './App.css'
import Thumbnail from "./Utils/VideoThumnail/Thumbnail";
import VideoResult from "./Utils/Videoresults/VideoResult";
function App() {
 
  return (
<>
<Header/>
<Sidebar/>
<Tabs/>
<div className='margner'>
<Routes>
  <Route path="/" element={<Thumbnail/>}/>
  <Route path="/video/:id" element={<VideoPlayer/>}/>
  <Route  path="/videos" element={<VideoResult/>}/>

  </Routes>
  </div>

</>
  );
}


export default App;

