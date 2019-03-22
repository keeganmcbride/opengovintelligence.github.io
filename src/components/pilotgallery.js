import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Gallery from "components/gallery";

const Pilotgallery = () => (
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
                image {
                  childImageSharp {
                    fluid(maxHeight: 500, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
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
      <Gallery
        items={data.allMarkdownRemark.edges
          .filter(edge => edge.node.fields.slug.includes(`pilots-individual`))
          .map(edge => ({
            title: edge.node.frontmatter.title,
            copy: edge.node.frontmatter.blurb,
            link: edge.node.fields.slug,
            image: edge.node.frontmatter.image
          }))}
      />
    )}
  />
);

export default Pilotgallery;
