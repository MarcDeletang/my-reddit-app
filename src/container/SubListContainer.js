import { connect } from 'react-redux';
import SubList from '../component/SubList';
import {selectSub} from '../action/redditAction';

const mapStateToProps = state => ({
  subRList: state.subRList,
  selectedSub: state.selectedSub
});

const mapDispatchToProps = dispatch => ({
  selectSub: subTitle => dispatch(selectSub(subTitle))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubList)