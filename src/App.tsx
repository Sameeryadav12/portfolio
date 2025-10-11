// src/App.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ThemeProvider from './theme/ThemeProvider'
import ScrollToTop from './components/ScrollToTop'

// pages
import Home from './routes/Home'
import Projects from './routes/Projects'
import Project from './routes/Project'
import About from './routes/About'
import Skills from './routes/Skills'
import Resume from './routes/Resume'
import Contact from './routes/Contact'
import BlogList from './routes/BlogList'
import BlogPost from './routes/BlogPost'
import NotFound from './routes/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Catch-all at the bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

