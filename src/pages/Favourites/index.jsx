/* eslint-disable react/prop-types */
import { Component } from "react";
import { connect } from "react-redux";
import PostCard from "../../components/PostCard";
import { toggleFavourite } from "../../redux/postListSlice";
import "./index.css";

export class Favourites extends Component {
  render() {
    const {
      posts: { postsList },
    } = this.props;
    return (
      <div className="container">
        {postsList?.map(
          (post) => post.isFavourite && <PostCard key={post.id} {...post} toggleFavourite={this.props.toggleFavourite}  />
        )}
        {
          postsList.length===0 && <p>No Favourite Post</p>
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts,
});
const mapDispatchToProps = { toggleFavourite };

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
