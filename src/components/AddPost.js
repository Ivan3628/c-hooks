import React, { useState, useContext } from "react";
import PostContext from "../context/post/postContext";

const AddPost = ({ history }) => {
  const postContext = useContext(PostContext);
  const { addPost } = postContext;

  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const { title, body } = post;

  const onChange = e =>
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body
    };

    addPost(newPost);
    setPost({
      title: "",
      body: ""
    });

    history.push("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">AddPost</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor={title}>Title</label>
            <input
              type="text"
              name="title"
              className="form-control form-control-lg"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor={body}>Post</label>
            <textarea
              type="text"
              name="body"
              className="form-control form-control-lg"
              value={body}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="Add Post"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPost;
