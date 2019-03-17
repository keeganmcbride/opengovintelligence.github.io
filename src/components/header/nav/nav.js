import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/pilots">Pilots</Link>
      </li>
      <li>
        <Link to="/publications">Publications</Link>
      </li>
      <li>
        <Link to="/software">Software</Link>
      </li>
      <li>
        <Link to="/deliverables">Deliverables</Link>
      </li>
      <li>
        <a href="https://medium.com/opengovintelligence">Blog</a>
      </li>

    </ul>
  </Container>
);

export default Nav;
