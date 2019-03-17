import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Deliverables = ({ data }) => (
  <Layout>
    <Head pageTitle={data.deliverablesJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.deliverablesJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Deliverables.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Deliverables;

export const query = graphql`
  query DeliverablesQuery {
    deliverablesJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
