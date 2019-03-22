import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Training = ({ data }) => (
  <Layout>
    <Head pageTitle={data.trainingJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.trainingJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Training.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Training;

export const query = graphql`
  query TrainingQuery {
    trainingJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
