import { GET_POSTS,CREATE_POST,DELETE_POST } from "../action-types";

const initialState = {
  posts: [],
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
      }
    default:
      return state;
  }
}
