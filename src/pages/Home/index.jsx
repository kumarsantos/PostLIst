/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import PostCard from "../../components/PostCard";
import { addListOfPost } from "../../redux/postListSlice";

export class Home extends Component {
  componentDidMount() {
    //Async operation like fetch data form API and dispatch to store
    this.props.addListOfPost([1, 3, 4]);
  }
  render() {
    const { postsList } = this.props;
    return (
      <div>
        {postsList?.map((post) => (
          <PostCard key={post.id} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  postsList: state.postsList,
});

const mapDispatchToProps = { addListOfPost };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
