import React from 'react';
import Category from './category.js';
import './categories.css';
import Search from '../../widgets/containers/search';

import Media from '../../playlist/containers/media.js'

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.search.map((item) => {
          return <Media
            openModal={props.openModal}
            {...item.toJS()}
            key={item.get('id')}
          />
        })
      }
      {
        // props.search.length ?
        props.categories.map((category) => (
          <Category
            {...category.toJS()}
            // key={category.id}
            key={category.get('id')}
            // openModal={props.openModal}
          />
        ))
      }

    </div>
  )
}

export default Categories;
