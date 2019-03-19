import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';
import 'styles/styles.css';

const Layout = ({ data, children, addClass }) => (
  <div className={addClass}>
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  addClass: PropTypes.string,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
