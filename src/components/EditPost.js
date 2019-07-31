import React, { useState, useEffect, useContext } from "react";
import PostContext from "../context/post/postContext";

const EditPost = ({ history, match }) => {
  const postContext = useContext(PostContext);
  const { current, updatePost } = postContext;

  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const { title, body } = post;

  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      setPost({
        title: "",
        body: ""
      });
    }
  }, [postContext, current]);

  const onChange = e =>
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();

    const { id } = match.params;

    const updPost = {
      id: id,
      title: title,
      body: body
    };

    updatePost(updPost);
    setPost({
      title: "",
      body: ""
    });
    history.push("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Edit Post</div>
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
              rows="5"
              className="form-control form-control-lg"
              value={body}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="Edit Post"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default EditPost;
