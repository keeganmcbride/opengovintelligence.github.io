import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav>

        <Link to="/about">About</Link>

        <Link to="/pilots">Pilots</Link>

        <Link to="/publications">Publications</Link>

        <Link to="/software">Software</Link>

        <Link to="/deliverables">Deliverables</Link>

        <a href="https://medium.com/opengovintelligence">Blog</a>

  </nav>
);

export default Nav;
