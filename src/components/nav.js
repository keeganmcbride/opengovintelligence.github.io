import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav>
    <input type="checkbox" id="toggle" />
    <label htmlFor="toggle" id="menuToggle">
      <span />
      <span />
      <span />
    </label>

    <div>
      <Link to="/about">About</Link>

      <Link to="/pilots">Pilots</Link>

      <Link to="/publications">Publications</Link>

      <Link to="/software">Software</Link>

      <Link to="/training">Training</Link>

      <Link to="/deliverables">Deliverables</Link>

      <a href="https://medium.com/opengovintelligence">Blog</a>
    </div>
  </nav>
);

export default Nav;
