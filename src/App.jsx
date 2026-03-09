import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProfileSidebar from './components/ProfileSidebar'

function App() {
  return (
    <div className="App">
      <div className="app-shell">
        <main className="content-column">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <aside className="profile-column">
          <ProfileSidebar />
        </aside>
      </div>
      <footer className="footer">
        <p>&copy; 2026 Kim Long. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
