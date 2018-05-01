import React, { Component } from 'react';
import '../css/Posts.css';

class Posts extends Component {

  render() {
    let postsArray = this.props.posts.map((post, index) =>
        (
       <li key={index}>
         <div className="scoreContainer">{post.upvote}</div>
         <div className="thumbnailContainer">
           <img className="thumbnail" src={post.thumbnail} alt="img"/>
         </div>
         <div className="infoContainer">
           <div className="postTitle">
             <span><a href={post.url}>{post.title}</a></span>
           </div>
           <div className="postInfo">
             Created by <b>{post.authorName}</b>
           </div>
         </div>
       </li>
    ));
    return(
      <ul className="postslist-ul">
        {postsArray}
      </ul>
    );
  }
}

export default Posts;