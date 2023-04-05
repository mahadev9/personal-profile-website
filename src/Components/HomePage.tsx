import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'
import ContactMe from './ContactMe'
import Education from './Education'
import ErrorPage from './ErrorPage'
import Experience from './Experience'
import Header from './Header'
import Introduction from './Introduction'
import Projects from './Projects'

export default function HomePage () {
  return (
    <div className='d-flex flex-column position-absolute top-0 start-0 bottom-0 end-0'>
      <Header />
      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/" element={<Introduction />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}
