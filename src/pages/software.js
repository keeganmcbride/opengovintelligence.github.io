import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Software = ({ data }) => (
  <Layout>
    <Head pageTitle={data.softwareJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.softwareJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Software.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Software;

export const query = graphql`
  query SoftwareQuery {
    softwareJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
