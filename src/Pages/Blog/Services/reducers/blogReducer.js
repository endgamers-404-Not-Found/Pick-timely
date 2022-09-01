import { GET_BLOGS_FAIL, GET_BLOGS_REQUEST, GET_BLOGS_SUCCESS } from "../constants/blogsContansts";

const intialState={
    isLoading:false,
    blogs:[],
    error:null
};

const blogReducer= (state=intialState,action)=>{
    switch (action.type) {
        case GET_BLOGS_REQUEST:
            
            return{
                ...state,
                isLoading:true,
            }
        case GET_BLOGS_SUCCESS:   
            return{               
                isLoading:false,
                blogs:action.payload,
                error:null,
            }
        case GET_BLOGS_FAIL:   
            return{               
                isLoading:false,
                blogs:[],
                error:action.payload,
            }
    
        default:
            return state;
    }

}

export default blogReducer;