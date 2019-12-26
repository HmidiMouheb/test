import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getComments from "../actions/getComments";
import getPosts from "../actions/getPosts";

class UserPosts extends React.Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getComments();
  }
  componentDidUpdate(prevProps){
      if()
  }
  render() {
    console.log(this.props.match.params);
    console.log(this.props.posts);
    const { id } = this.props.match.params.id;
    return (
      <div>
        {this.props.posts.map((post, i) => {
          if (post.userId == id) {
            return (
              <div>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.UserReducer.users,
    posts: state.PostsReducer.usersPosts
  };
};

const mapActionsToProps = dispatch => {
  return {
    getPosts: bindActionCreators(getPosts, dispatch),
    getComments: bindActionCreators(getComments, dispatch)
  };
};

export default connect(mapStateToProps, mapActionsToProps)(UserPosts);
