import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Banner from './component/Banner/Banner'
import Count from './component/Count/Count'
import Academics from './component/Academics/Academics'
import WhyChooseMwu from './component/WhyChooseMWU/WhyChooseMwu'
import CampusLife from "./component/CampusLife/CampusLife"
import Stories from './component/StudentStories/Stories'
import LatestNews from './component/LatestNews/LatestNews'
import Events from './component/Events/Events'
import Apply from './component/Apply/Apply'
import President from "./component/President/President"
import Faq from "./component/FAQ/Faq"

// Pages Imports
import AboutUsPage from './component/AboutUs/AboutUsPage'
import ContactUs from './component/ContactUs/ContactUs'
import EventPage from './component/Events/EventsPage'
import BlogPage from "./component/Blog/BlogPage"
import BlogDetailPage from "./component/Blog/BlogDetailPage"
import EventsDetailPage from "./component/Events/EventsDetailPage"
import './App.css'

function Home() {
  return (
    <>
      <Banner />
      <Count />
      <Academics />
      <WhyChooseMwu />
      <CampusLife />
      <Stories />
      <Events />
      <Apply />
      <President />
      <Faq />
      <LatestNews />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<EventPage/>}/>
        <Route path = "/event-detail" element={<EventsDetailPage/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path='/blog-detail' element={<BlogDetailPage/>}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App