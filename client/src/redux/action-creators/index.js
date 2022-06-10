import axios from "axios";
import {
  GET_POSTS,
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  UNMOUNT_POST,
  UPDATE_POST,
} from "../action-types";

export const getPosts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/posts");
    return dispatch({
      type: GET_POSTS,
      payload: data,
    });
  };
};

export const createPost = (post) => {
  const form = new FormData();

  for (const key in post) {
    form.append(key, post[key]);
  }
  console.log(form)

  return (dispatch) => {
    return axios
      .post("/posts", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return dispatch({
          type: CREATE_POST,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return axios.delete(`/posts/${id}`).then((response) => {
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
    });
  };
};

export const getPost = (id) => {
  return (dispatch) => {
    return axios.get(`/posts/${id}`).then((response) => {
      dispatch({
        type: GET_POST,
        payload: response.data,
      });
    });
  };
};

export const unmountPost = () => {
  return {
    type: UNMOUNT_POST,
    payload: {},
  };
};

export const updatePost = (id, post) => {
  return (dispatch) => {
    return axios
      .put(`/posts/${id}`, post)
      .then((response) => {
        dispatch({
          type: UPDATE_POST,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
