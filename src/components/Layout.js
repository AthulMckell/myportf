"use client"
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      const sections = ['home', 'projects', 'contact', 'about']
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-pink-300 font-mono">
      <div className="fixed inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 pointer-events-none"></div>
      <Header activeSection={activeSection} />
      <main className="pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}