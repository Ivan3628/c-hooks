import { GET_POSTS, DELETE_POST, ADD_POST } from "./types";
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

export const addPost = post => async dispatch => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  dispatch({ type: ADD_POST, payload: response.data });
};
