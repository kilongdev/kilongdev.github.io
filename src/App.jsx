import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2026 My Portfolio. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
