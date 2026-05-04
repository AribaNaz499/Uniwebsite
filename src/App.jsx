import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Count from './component/Count/Count'
import './App.css'
import Academics from './component/Academics/Academics'
import WhyChooseMwu from './component/WhyChooseMWU/WhyChooseMwu'
import CampusLife from "./component/CampusLife/CampusLife"
import Stories from './component/StudentStories/Stories'
import LatestNews from './component/LatestNews/LatestNews'
import Events from './component/Events/Events'
import Apply from './component/Apply/Apply'
import President from "./component/President/President"
import Faq from "./component/FAQ/Faq"
function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Count/>
      <Academics/>
      <WhyChooseMwu/>
      <CampusLife/>
      <Stories/>
      <Events/>
      <Apply/>
      <President/>
      <Faq/>
      <LatestNews/>
      <Footer/>
    </>
  )
}

export default App
