import { createContext, useReducer } from "react";
import reducer from "./Reducer";
import { useNavigate} from 'react-router-dom'
const Context = createContext();
const intial = {
  SearchVideos: [],
  query: "",
  videoURL: "",
  load: false,
  VideoComments: [],
  VideoDetail: [],
  RelatedVideo:[],
  BrowseVideo:[]
};
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48ee33e0a1msh9a8bec06089ef45p1bbf7djsn7774b81ca4a2',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
// let options;

const Consumer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intial);
  const navigate=useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://youtube138.p.rapidapi.com/search/?q=${state.query}&hl=en&gl=US`,
      options
    );
    dispatch({ type: "TRY_LOADING" });
    const data = await response.json();
    dispatch({ type: "SUCESS_LOADING" });
    dispatch({ type: "FETCH_SEARCH_RESULT", payload: data });
    navigate('/')
    
  };
  const searchQuery = (e) => {
    dispatch({ type: "SEARCH_QUERY", payload: e.target.value });
  };
  const fetchVideo=async()=>{
    const response=await fetch(`https://youtube138.p.rapidapi.com/search/?q=data&hl=en&gl=US`, options)
      const res=await response.json()
      dispatch({type:"BROWSE_VIDEO",payload:res})

    }

  const VideoFetch = async (id) => {
    const response = await fetch(
      `https://youtube138.p.rapidapi.com/video/streaming-data/?id=${id}`,
      options
    );
    dispatch({ type: "TRY_LOADING" });
    const data = await response.json();
    dispatch({ type: "SUCESS_LOADING" });
    FetchDetail(id);
    FetchComments(id);
    FetchRelated(id)
    dispatch({ type: "FETCH_VIDEO", payload: data });
  };
  const FetchDetail = async (id) => {
    const detail = await fetch(
      `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`,
      options
    );
    const resDetail = await detail.json();
    dispatch({ type: "FETCH_DETAILS", payload: resDetail });
  };
  const FetchComments = async (id) => {
    const detail = await fetch(
      `https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`,
      options
    );
    const resDetail = await detail.json();
    dispatch({ type: "FETCH_COMMENTS", payload: resDetail });
  };
  const FetchRelated = async (id) => {
    const detail = await fetch(
      `https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=US`,
      options
    );
    const resDetail = await detail.json();
    dispatch({ type: "FETCH_RELATED", payload: resDetail });
  };
  const converter=(val)=>{
    val=String(val)
    if(val!=="undefined"){
    if(val>=1000 && val<10000) return val.slice(0,1)+"K"
    if(val>=10000 && val<100000) return val.slice(0,2)+"K"
    if(val>=100000 && val<1000000)return val.slice(0,1)+"M"
    if(val>=1000000 && val<9999999)return val.slice(0,2)+"M"
    return val
    }
    return
  }
  return (
    <Context.Provider
      value={{
        ...state,
        handleSubmit,
        searchQuery,
        VideoFetch,
        FetchDetail,
        FetchComments,
        FetchRelated,
        fetchVideo,
        converter
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Consumer };
