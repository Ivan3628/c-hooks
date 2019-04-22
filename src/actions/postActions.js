import { GET_POSTS, DELETE_POST } from "./types";
import axios from "axios";

export const getPosts = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: GET_POSTS, payload: response.data });
};

export const deletePost = id => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
};
