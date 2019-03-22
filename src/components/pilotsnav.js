import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Pilotsnav = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                blurb
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <h3>Pilots</h3>
        <ul>
          {data.allMarkdownRemark.edges
            .filter(edge => edge.node.fields.slug.includes(`pilots-individual`))
            .map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link> {node.frontmatter.blurb}
              </li>
            ))}
        </ul>
      </nav>
    )}
  />
);

export default Pilotsnav;
