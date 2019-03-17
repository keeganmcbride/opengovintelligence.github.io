import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Publications = ({ data }) => (
  <Layout>
    <Head pageTitle={data.publicationsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.publicationsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Publications.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Publications;

export const query = graphql`
  query PublicationsQuery {
    publicationsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
