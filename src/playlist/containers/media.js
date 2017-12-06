import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../components/media';
// import { openModal } from '../../actions/index';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class MediaContainer extends Component {
  openModal = (id) => {
    // this.props.dispatch({
    //   type: 'OPEN_MODAL',
    //   payload: {
    //     mediaId: id
    //   }
    // })
    // this.props.dispatch(openModal(id))
    this.props.actions.openModal(id);
  }
  render() {
    return <Media {...this.props.data.toJS()} openModal={this.openModal}/>
  }
}

function mapStateToProps(state, props){
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
