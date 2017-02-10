import React, { PropTypes } from 'react';

// Import Components
import PostCommentItem from './PostCommentItem/PostCommentItem';

// Import Style
import styles from './PostCommentItem/PostCommentItem.css';

function PostCommentList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostCommentItem
            post={post}
            key={post._id}
          />
        ))
      }
    </div>
  );
}

PostCommentList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostCommentList;
