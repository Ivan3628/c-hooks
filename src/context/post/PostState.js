import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import PostReducer from "./postReducer";

import {
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  SET_CURRENT,
  UPDATE_POST
} from "../types";

const PostState = props => {
  const initialState = {
    posts: [],
    current: null
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  //Get Posts
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: GET_POSTS, payload: response.data });
  };

  //Add Post
  const addPost = async post => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    dispatch({ type: ADD_POST, payload: response.data });
  };

  //Delete Post
  const deletePost = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (err) {
      dispatch({ type: DELETE_POST, payload: id });
    }
  };

  //Set Current Post
  const setCurrent = async post => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    dispatch({ type: SET_CURRENT, payload: response.data });
  };

  //Update Post
  const updatePost = async post => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
    dispatch({ type: UPDATE_POST, payload: response.data });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
     current:state.current,
        deletePost,
        getPosts,
        addPost,
        setCurrent,
        updatePost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
