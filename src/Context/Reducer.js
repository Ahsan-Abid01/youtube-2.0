const reducer=(state,action)=>{
    switch(action.type){
        case "BROWSE_VIDEO":{
            return{
                ...state,
                BrowseVideo:action.payload,
            }
            }
    case "FETCH_SEARCH_RESULT":{
        return{
            ...state,
            BrowseVideo:action.payload,
        }
        }
        case "TRY_LOADING":{
            return {
                ...state,
                load:false
            }
        }
        case "SUCESS_LOADING":{
            return {
                ...state,
                load:true
            }
        }
        case "SEARCH_QUERY":{
            return {
                ...state,
                query:action.payload
            }
        }
        case "FETCH_VIDEO":{
            return {
                ...state,
                videoURL:action.payload
            }
        }
        case "FETCH_DETAILS":{
            return {
                ...state,
                VideoDetail:[action.payload]
            }
        }
        case "FETCH_COMMENTS":{
            return {
                ...state,
                VideoComments:[action.payload]
            }
        }
        case "FETCH_RELATED":{
            return {
                ...state,
                RelatedVideo:[action.payload]
            }
        }

        default:
            return{
                ...state
            }

}

}
export default reducer;