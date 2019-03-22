import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/item';

const ieHack = () => {
  return {
    __html: `<style>_:-ms-fullscreen, :root .Gallery .gatsby-image-wrapper { display: none; }</style>`,
  };
};

const Gallery = ({ items }) => (
  <div className="Gallery">
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
    <div dangerouslySetInnerHTML={ieHack()} />
  </div>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
