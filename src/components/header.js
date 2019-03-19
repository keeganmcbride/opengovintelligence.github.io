import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import Nav from 'components/nav';

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-5%',
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <header className="reverse">
      <Link to="/">
          open<span>gov</span>intelligence
      </Link>
      <Nav />
    </header>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
