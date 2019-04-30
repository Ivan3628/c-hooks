import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost, updatePost } from "../actions/postActions";

class EditPost extends Component {
  state = {
    title: "",
    body: ""
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { title, body } = nextProps.post;

    this.setState({
      title: title,
      body: body
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }
  addToState = e => this.setState({ [e.target.name]: e.target.value });

  submitPost = e => {
    e.preventDefault();
    const { title, body } = this.state;

    const id = this.props.match.params;

    const updPost = {
      id: id,
      title: title,
      body: body
    };

    this.props.updatePost(updPost);

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
        <div className="card-header">Edit Post</div>
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
              <label htmlFor={body}>Post</label>
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
              value="Edit Post"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post.post
});

export default connect(
  mapStateToProps,
  { getPost, updatePost }
)(EditPost);
