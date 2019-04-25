import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };

  addToState = e => this.setState({ [e.target.name]: e.target.value });

  submitPost = e => {
    e.preventDefault();
    const { title, body } = this.state;

    const newPost = {
      title: title,
      body: body
    };

    this.props.addPost(newPost);

    this.setState({
      title: "",
      body: ""
    });

    this.props.history.push("/");
  };
  render() {
    const { title, body } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">AddPost</div>
        <div className="card-body">
          <form onSubmit={this.submitPost}>
            <div className="form-group">
              <label htmlFor={title}>Title</label>
              <input
                type="text"
                name="title"
                className="form-control form-control-lg"
                value={title}
                onChange={this.addToState}
              />
            </div>
            <div className="form-group">
              <label htmlFor={body}>Body</label>
              <textarea
                type="text"
                name="body"
                className="form-control form-control-lg"
                value={body}
                onChange={this.addToState}
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
  }
}

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired
};
export default connect(
  null,
  { addPost }
)(AddPost);
