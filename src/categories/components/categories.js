import React from 'react';
import Category from './category.js';
import './categories.css';
import Search from '../../widgets/containers/search';

import Media from '../../playlist/components/media.js'

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.searchResults.length ?
          props.searchResults.map((item) => {
            return <Media {...item} />
          })
        :
        props.categories.map((category) => (
          <Category
            {...category}
            key={category.id}
            openModal={props.openModal}
          />
        ))
      }

    </div>
  )
}

export default Categories;
