import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostCommentItem.css';

function PostCommentItem(props) {
  return (
    <div className={styles['single-comment']}>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.author}
        <span className={styles['created-date']}>({props.post.date.split('T')[0]}) </span></p>
      <p className={styles['post-desc']}>{props.post.text}</p>
      <hr className={styles.divider} />
    </div>
  );
}

PostCommentItem.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCommentItem;
