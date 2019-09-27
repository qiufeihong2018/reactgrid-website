import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { 
  Container,
  Row,
  Col, 
  Button
} from "reactstrap";
import demoGIF from "../assets/img/demo.gif";


class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("reset-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("reset-page");
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social, docsVersions } = data.site.siteMetadata;
    const docsVersion = docsVersions[0];
    const demoPage = pages.find(page => page.id === 'examples')
    // const featuresPage = pages.find(page => page.id === 'features')
    const docsPage = pages.find(page => page.id === 'docs')
    const githubSocial = social.find(social => social.title === 'Github')
    
    const usps = [
      {
        number: '01',
        header: <span>Highly customizable / flexible at runtime/ Dynamic / reactive</span>,
        description: '',
        features: [
          'Not limited to the way how other grids render data',
          'Free yourself from / Don’t think in terms of fields and records',
        ],
        imgSrc: demoGIF,
        imgAlt: '',
      },
      {
        number: '02',
        header: <span>Spreadsheet-like look and feel</span>,
        description: '',
        features: [],
        imgSrc: demoGIF,
        imgAlt: '',
      },
      {
        number: '03',
        header: <span>Using ReactJS concepts <br/>(Thinking in react)</span>,
        description: '',
        features: [],
        imgSrc: 'https://cdn.worldvectorlogo.com/logos/react.svg',
        imgAlt: '',
      },
    ]

    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="wrapper" ref="wrapper">
          <div className="">
            <div className="space"></div>
            <Container>
              <Row>
                <Col className="mr-auto text-left align-items-center" lg="5" md="7">
                  <h1 className="title display-1 mb-3">
                    Build <span className="text-success">WOW!</span><br/>-tables
                  </h1>
                  <h3 className="title">Create highly customizable spreadsheet-like grids</h3>
                  <br />
                  <div className="buttons">
                    <Button className="mr-3 px-3 " color="warning" tag={Link} to={demoPage.route} size="lg">
                      Check examples {' '}<i className="tim-icons icon-double-right"/>
                    </Button>
                  </div>
                </Col>
                <Col className="ml-auto mt-5 d-flex align-items-center" lg="7" md="12">
                  <div className="iframe-container ">
                    <img alt="Demo animation" src={demoGIF}/>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="space"></div>
          </div>
        </div>
        <div>
          <Container>
            <Row className="align-items-center">
              <Col className="pb-5">
                <h1 className="title text-center">Why is <span className="text-success">ReactGrid</span> unique?</h1>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <Row>
                  {usps.map(item => <USP key={item.number} {...item}></USP> )}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center mt-4" md="10">
                <h2 className="title">Curious yet?</h2>
                <h4 className="description mb-5">
                  Dive in setup tutorial right now and develop your first ReactGrid application!
                </h4>
                <Button className="mx-2" color="primary" size="lg" tag={Link} to={`${docsPage.route}${docsVersion.slug}${docsVersion.index}/`}>
                  Get started{' '}<i className="tim-icons icon-double-right"/>
                </Button>
                <a className="btn btn-lg mx-2 btn-success" size="lg" target="_blank" rel="noopener noreferrer" href={githubSocial.url}>
                  View Source on Github <i className={`${githubSocial.fontAwesomeIcon} p-0`}/>
                </a>
              </Col>
            </Row>
          </Container>
        </div>      
      </Layout>
    )
  }
}

export default Index

const USP = ({number, header, description, features, imgSrc, imgAlt}) => {
  return (
    <Col md="12" className="py-md-5">
      <Row className="d-flex flex-column flex-md-row text-center text-md-left align-items-center ">
        <Col md="3" lg="2">
          <h4 className="text-muted display-1 text-bold pb-4 pb-md-0" style={{fontSize: '6em'}}>{number}</h4>
        </Col>
        <Col>
          {imgSrc && <div className="d-flex align-items-center justify-content-center pb-5 pb-md-0" >
            <img alt={imgAlt} src={imgSrc} style={{maxHeight: '200px'}} />
          </div>}
        </Col>
        <Col>
          <h4 className="">{header}</h4>
          {features && <ul className="text-left pl-3">
            {features.map(item => <li key={item}>{item}</li> )}
          </ul>}
          <p className="description">{description}</p>
        </Col>
      </Row>
      <hr class="line-primary mx-auto d-md-none"/>
    </Col>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        pages {
          description
          id
          route
          title
          active
        }
        docsVersions {
          slug
          desc
          index
        }
        social {
          description
          fontAwesomeIcon
          title
          url
        }
      }
    }
  }
`
