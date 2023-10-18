import React from 'react';
import Info from './Info';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import WorkingExperiences from './WorkingExperiences';

const Landing =  () => {
    return(
        <>
          <Info/>
          <AboutMe/>
          <Skills/>
          <Education/>
          <WorkingExperiences/>
        </>
    )
}

export default Landing;