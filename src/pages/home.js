import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from '../widgets/containers/modal';
import Modal from '../widgets/components/modal';
import VideoPlayer from '../player/containers/video-player';

import Categories from '../categories/components/categories';
import HomeLayout from '../layout/components/home-layout';
import HandleError from '../error/containers/handle-error';
import Related from '../layout/components/related';
import { connect } from 'react-redux';
import { List as list } from 'immutable';

class Home extends Component {
  state = {
    modalVisible: false,
    // error: false,
  }
  openModal = (id) => {
    // this.setState({
    //   modalVisible: true,
    //   video
    // })
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId: id
      }
    })
  }
  closeModal = () => {
    this.setState({
      modalVisible: false
    })
  }
  // componentDidCatch(error, info) {
  //   console.log('ha ocurrido un error',error);
  //   console.log('info del error', info)
  //   this.setState({
  //     error: true,
  //   })
  // }
  render() {
    // if (this.state.error) {
    //   return <p>hay un error</p>
    // }
    return (
      <HandleError>

        <HomeLayout>
          <Related />

          <Categories
            categories={this.props.categories}
            openModal={this.openModal}
            search={this.props.search}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleModal={this.closeModal}
              >
                <VideoPlayer
                  autoplay
                  title={this.state.video.title}
                  src={this.state.video.src}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>

    );
  }
}


function mapStateToProps(state, props) {
  // const categories = state.data.categories.map((categoryId) => {
  //   return state.data.entities.categories[categoryId]
  // })
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })

  let searchResults = list();

  const search = state.get('data').get('search');
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }

  return {
    // categories: state.data.categories,
    categories: categories,
    // search: state.data.search,
    search: searchResults,
  }
}

export default connect(mapStateToProps)(Home);
