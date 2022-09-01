import axios from "axios";
import { GET_BLOGS_FAIL, GET_BLOGS_REQUEST, GET_BLOGS_SUCCESS } from "../constants/blogsContansts";

export const getAllBlogs=()=> async(dispatch)=>{
    dispatch({type:GET_BLOGS_REQUEST});
   try {
    const res=await axios.get("https://pick-timely.herokuapp.com/blog") ;
    dispatch({type:GET_BLOGS_SUCCESS,payload:res.data})
   } catch (error) {
    dispatch({type:GET_BLOGS_FAIL,payload:error.message})
    
   }

}