import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image, link }) => (
  <figure>
    <a href={link}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </a>
    <figcaption>
      <a href={link}>
        <Title>{title}</Title>
      </a>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string,
};

export default Item;
