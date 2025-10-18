import './App.css'
import { useState, useEffect } from 'react'
import Home from './assets/Home'
import Work from './assets/Work'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleNavigate = (event) => {
      setCurrentPage(event.detail)
    }

    window.addEventListener('navigate', handleNavigate)
    return () => window.removeEventListener('navigate', handleNavigate)
  }, [])

  const handleNavClick = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'work':
        return <Work />
      case 'bylines':
        return <div style={{minHeight: '100vh', backgroundColor: '#3E0230', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace"}}>Bylines page coming soon...</div>
      case 'contact':
        return <div style={{minHeight: '100vh', backgroundColor: '#3E0230', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace"}}>Contact page coming soon...</div>
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-[#3E0230] w-full">
      {renderPage()}
    </div>
  )
}

export default App