import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

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
        <ul>
          {data.allMarkdownRemark.edges
            .filter(edge => edge.node.fields.slug.includes(`pilots-individual`))
            .map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </li>
            ))}
        </ul>
      </nav>
    )}
  />
);

export default Pilotsnav;
