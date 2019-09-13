import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("blog-post");
  }
  componentWillUnmount() {
    document.body.classList.remove("blog-post");
  }
  render() {
    const post = this.props.data.markdownRemark
    const { title, description, pages, social } = this.props.data.site.siteMetadata
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}/>
        
        <div className="page-header header-filter">
          <div
            className="page-header-image"
            data-parallax={true}
            style={{ backgroundImage:"url(" + post.frontmatter.thumbnail.childImageSharp.fluid.base64 + ")"}}
          />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1  className="title">{post.frontmatter.title}</h1>
                <div className="author">
                  <Img sizes={post.frontmatter.authorImg.childImageSharp.sizes} className="avatar img-raised"/> 
                </div>
                <br />
                <h4 className="description">By {post.frontmatter.author} on {post.frontmatter.date}</h4>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <p style={{fontSize: '1.3em'}} dangerouslySetInnerHTML={{ __html: post.html }}></p>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        pages {
          description
          id
          route
          title
        }
        social {
          description
          fontAwesomeIcon
          title
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        author
        authorImg {
          childImageSharp {
            sizes(maxWidth: 120) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        thumbnail {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
