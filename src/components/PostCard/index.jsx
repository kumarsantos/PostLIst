import React, { Component } from 'react'
import './index.css';
import { CiHeart } from "react-icons/ci";

export class PostCard extends Component {
  render() {
    const {id,title,image,author,description,date,isFavourite,toggleFavourite}=this.props;
    return (
      <div className='card_container'>
        <div className='image_wrapper'>
          <img className='image' src={image} alt='post-image' />
        </div>
        <div className='heading_sec'>
          <h2>{title}<CiHeart style={{marginLeft:'8px'}} fill={isFavourite ? 'red':''} onClick={()=>toggleFavourite(id)}/> </h2>
          <p className='description'>{description}</p>
        </div>
        <div className='auth_sec'>
          <p className='author'>{author}</p>
          <p className='date'>{date}</p>
        </div>
      </div>
    )
  }
}


export default PostCard