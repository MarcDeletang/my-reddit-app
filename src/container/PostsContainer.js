import {connect} from 'react-redux';
import Posts from '../component/Posts';

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect (
  mapStateToProps,
  null
)(Posts)