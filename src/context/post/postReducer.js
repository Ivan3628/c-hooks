import {
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  SET_CURRENT,
  UPDATE_POST
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? (post = action.payload) : post
        )
      };
    default:
      return state;
  }
};
