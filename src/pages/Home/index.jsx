/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import PostCard from "../../components/PostCard";
import { addListOfPost,toggleFavourite } from "../../redux/postListSlice";
import { listOfPosts } from "../../constants";
import './index.css';

export class Home extends Component {
  componentDidMount() {
    this.props.addListOfPost(listOfPosts);
  }
  render() {
    const { posts:{postsList} } = this.props;
    return (
      <div className="container">
     {
       postsList?.map((post)=><PostCard key={post.id} {...post} toggleFavourite={this.props.toggleFavourite} />)
      }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = { addListOfPost,toggleFavourite};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
