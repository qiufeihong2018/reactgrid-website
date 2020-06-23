import React from "react";
import FooterOnlyLinks from "../components/FooterOnlyLinks"
import {
  Button,
  Container,
  UncontrolledTooltip,
  Col,
  Row,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    const { title, social } = this.props;
    const socialLinks = social.map((link, idx) => {
      return <SocialLink key={idx} id={idx} fontAwesomeIcon={link.fontAwesomeIcon} description={link.description}
        url={link.url} title={link.title} />
    })
    return (
      <>
        <footer className="footer footer-simple bg-darker" data-background-color="black">
          <Container>
            <Row className="text-left pt-4">
              {/* <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0">
                  <h5>About</h5>
                  <ul className="links-vertical">
                    <CommonFooterLinks pages={pages} />
                  </ul>
                </Col> */}
              <Col xs="6" sm="6" md="3" className="pb-4 pb-sm-0">
                <h5 className="text-uppercase">Information</h5>
                <ul className="links-vertical">
                  <FooterOnlyLinks />
                </ul>
              </Col>
              <Col xs="6" sm="6" md="6" className="pb-4 pb-sm-0">
                <h5 className="text-uppercase">Contact</h5>
                <p>
                  <address>
                    Silevis Software<br />
                    Sienkiewicza Street 17/3<br />
                    25-007 Kielce<br />
                    Poland<br />
                  </address>
                </p>
              </Col>
              <Col xs="12" sm="12" md="3" className="pb-4 pb-sm-0">
                <h5 className="text-uppercase">Social</h5>
                <ul className="links-horizontal">
                  {socialLinks}
                </ul>
              </Col>
            </Row>
            <Row className="py-3 justify-content-between justify-content-between align-items-center">
              <Col xs="12" sm="4">
                <h3 className="font-weight-bold mb-0 text-center text-sm-left" style={{ fontSize: '1.75rem' }}>{title}</h3>
              </Col>
              <Col xs="12" sm="8" className="d-flex justify-content-center justify-content-sm-end">
                <span className="text-center text-sm-right">
                  Copyright © 2020 Silevis Software, All Rights Reserved.
                </span>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

const SocialLink = ({ fontAwesomeIcon, description, url, id, title }) => {
  const tooltipId = 'tooltip' + id;
  return (
    <li className="w-100">
      <div style={{ maxWidth: '160px' }}>
        <Button className="btn-simple d-flex align-items-center py-1" id={tooltipId} href={url} target="_blank">
          <span className="em-xs pr-3 p-1" style={{ width: '2em' }}><i className={fontAwesomeIcon} /></span>
          <span style={{ fontSize: '1.15em' }}>{' '} {title}</span>
        </Button>
        <UncontrolledTooltip delay={0} target={tooltipId}>{description}</UncontrolledTooltip>
      </div>
    </li>
  )
}

export default Footer;
