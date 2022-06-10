import { GET_POSTS,CREATE_POST,DELETE_POST,GET_POST,UNMOUNT_POST, UPDATE_POST } from "../action-types";

const initialState = {
  posts: [],
  post: {},
};

export default function rootReduce(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case CREATE_POST:
      return {
        ...state,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
      };
    case UNMOUNT_POST:
      return {
        ...state,
        post: payload,
      };
    case UPDATE_POST:
      return {
        ...state,
      }
    default:
      return state;
  }
}
