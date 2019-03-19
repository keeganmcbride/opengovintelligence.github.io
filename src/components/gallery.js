import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/item';

const Gallery = ({ items }) => (
  <div className="Gallery">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
