import React from 'react'
import FormSection from '../components/landingPage/formSection'
import About from '../components/landingPage/about'
import Numbers from '../components/landingPage/numbers'
import Differentials from '../components/landingPage/differentials'
import Support from '../components/landingPage/support'
import Review from '../components/landingPage/review'

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


const FranchisePage = () => {
  return (
  <>
  <ScrollToTopOnMount />
  <FormSection />
  <About />
  <Numbers />
  <Differentials />
  <Support />
  <Review />
  </>
  )
}

export default FranchisePage