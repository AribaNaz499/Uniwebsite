import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Count from './component/Count/Count'
import './App.css'
import Academics from './component/Academics/Academics'
import WhyChooseMwu from './component/WhyChooseMWU/WhyChooseMwu'
import CampusLife from "./component/CampusLife/CampusLife"
import Storues from './component/StudentStories/Stories'
import LatestNews from './component/LatestNews/LatestNews'
function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Count/>
      <Academics/>
      <WhyChooseMwu/>
      <CampusLife/>
      <Storues/>
      {/* <LatestNews/> */}
      <Footer/>
    </>
  )
}

export default App
