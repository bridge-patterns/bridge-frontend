import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import GridContainer from '../Grid/GridContainer.js';
import GridItem from '../Grid/GridItem.js';
import Button from '../CustomButtons/Button.js';
import HeaderLinks from '../Header/HeaderLinks.js';
import Parallax from '../Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import ProductSection from './Sections/ProductSection.js';
import TeamSection from './Sections/TeamSection.js';
import WorkSection from './Sections/WorkSection.js';
import CareerSection from './Sections/CareerSection';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Anabridge"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>From Data to Insights.</h1>
              <h4>We help businesses thrive by deriving insights from data.</h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLScJ4jMzhQXLao170kXeILx7DoAIkHJT3kvz7vHtG0ILrVHDSQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="fas fa-play" /> */}
                Register here for the Launch Event
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <CareerSection /> */}
          <ProductSection />
          {/* <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
