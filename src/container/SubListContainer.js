import { connect } from 'react-redux';
import SubList from '../component/SubList';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  selectSub: dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubList)