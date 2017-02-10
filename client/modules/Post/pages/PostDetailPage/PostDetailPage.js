import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import components
import PostAddComment from '../../components/PostAddComment/PostAddComment';
import PostCommentList from '../../components/PostCommentList';

// Import Actions
import { fetchPost } from '../../PostActions';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Selectors
import { getPost } from '../../PostReducer';

export function PostDetailPage(props) {
  return (
    <div>
      <Helmet title={props.post.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.post.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
        <p className={styles['post-desc']}>{props.post.content}</p>
        <hr className={styles['divider-for-detail']} />
        <PostCommentList posts={props.post.comments}/>
        <PostAddComment cuid={props.params.cuid} dispatch={props.dispatch}/>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
  };
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(connect(mapStateToProps, null, null, { withRef: true })(PostDetailPage));