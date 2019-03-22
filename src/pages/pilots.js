import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import PilotGallery from 'components/pilotgallery';

const Pilots = ({ data }) => (
  <Layout>
    <Head pageTitle={data.pilotsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.pilotsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <PilotGallery />
  </Layout>
);

Pilots.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pilots;

export const query = graphql`
  query PilotsQuery {
    pilotsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
