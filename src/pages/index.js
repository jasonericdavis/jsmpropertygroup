import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';

import {IntroSection} from '../components/intro';
import {AboutSection} from '../components/about';
import {ServicesSection} from  '../components/services';
import {GallerySection} from '../components/gallery';
import {ContactSection} from '../components/contact';

import { Jumbotron, Container, Row, Col } from 'reactstrap';

const IndexPage = () => (
  <div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}
    {/* <Jumbotron>
      <Intro />
    </Jumbotron> */}
    <IntroSection />
    <AboutSection />
    <ServicesSection />
    {/* <GallerySection /> */}
    <ContactSection />
  </div>
)

export default IndexPage
