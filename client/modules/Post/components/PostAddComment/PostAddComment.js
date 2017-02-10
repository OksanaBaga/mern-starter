import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostAddComment.css';

// Import Actions
import { commentPostRequest } from '../../PostActions';

export class PostAddComment extends Component {

  commentPost = () => {
    const authorRef = this.refs.author;
    const textRef = this.refs.text;
    if (authorRef.value && textRef.value) {
      this.props.dispatch(commentPostRequest(this.props.cuid, {author:authorRef.value, text: textRef.value}));
      authorRef.value = textRef.value = '';
    }
  };

  render() {
    return (
      <div className={styles['form']}>
        <div className={styles['form-content']}>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="author" />
          <textarea placeholder={this.props.intl.messages.commentContent} className={styles['form-field']} ref="text" />
          <a className={styles['post-submit-button']} href="#" onClick={this.commentPost} ><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

PostAddComment.propTypes = {
  cuid: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default injectIntl(PostAddComment);
