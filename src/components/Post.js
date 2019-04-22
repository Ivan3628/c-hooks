import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  state = {
    showInfo: false
  };

  onDeleteClick = id => {
    this.props.deletePost(id);
  };
  render() {
    const { id, title, body } = this.props.post;
    const { showInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <i
          className="fas-fa-times"
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={this.onDeleteClick.bind(this, id)}
        />
        <h4>
          {title}{" "}
          <i
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
            onClick={() => this.setState({ showInfo: !this.state.showInfo })}
          />
        </h4>
        {showInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{body}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default connect(
  null,
  { deletePost }
)(Post);
