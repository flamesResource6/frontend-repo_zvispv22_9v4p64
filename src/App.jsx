import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExploreGrid from './components/ExploreGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ExploreGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
