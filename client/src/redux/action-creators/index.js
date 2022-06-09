import axios from "axios";
import { GET_POSTS,CREATE_POST,DELETE_POST } from "../action-types";

export const getPosts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/posts");
    return dispatch({ 
      type: GET_POSTS, 
      payload: data 
    });
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    return axios.post("/posts", post)
      .then((response) => {
        return dispatch({
          type: CREATE_POST,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
   }
}

export const deletePost = (id) => {
  return (dispatch) => {
    return axios.delete(`/posts/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_POST,
          payload: id
        })
      })
  }
}
