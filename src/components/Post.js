import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import PostContext from "../context/post/postContext";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const postContext = useContext(PostContext);
  const { setCurrent } = postContext;

  const [showInfo, setShowInfo] = useState(false);

  const onClick = () => {
    postContext.deletePost(id);
  };

  const toggleText = () => {
    showInfo ? setShowInfo(false) : setShowInfo(true);
  };
  const { id, title, body } = post;

  return (
    <div className="card card-body mb-3">
      <h4>
        <i
          className="fas fa-times"
          style={{
            cursor: "pointer",
            float: "right",
            color: "red"
          }}
          onClick={onClick}
        />
        <Link to={`/edit/${id}`}>
          <i
            className="fas fa-pencil-alt"
            onClick={() => setCurrent(post)}
            style={{
              cursor: "pointer",
              float: "right",
              color: "black",
              marginRight: "1rem"
            }}
          />
        </Link>
        {title}{" "}
        <i
          className="fas fa-sort-down"
          style={{ cursor: "pointer" }}
          onClick={toggleText}
        />
      </h4>
      {showInfo && (
        <ul className="list-group">
          <li className="list-group-item">
            <p className="lead">{body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
