import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (section) => {
    setMenuOpen(false)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm border-b border-pink-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-500">Athul Raj M</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-pink-500 hover:text-pink-400 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="fixed top-16 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-40 border-b border-pink-500">
          <ul className="container mx-auto py-4 space-y-2">
            {['home', 'resume', 'projects', 'contact', 'about'].map((item) => (
              <li key={item}>
                {item === 'resume' ? (
                  <Link href="https://drive.google.com/file/d/1NfUDmEWtSalXMmU7Sfki4DSD0z6Tu61w/view?usp=sharing" className="block py-2 px-4 text-pink-500 hover:text-pink-400 transition-colors">
                    Resume
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left py-2 px-4 ${activeSection === item ? 'text-pink-400' : 'text-pink-500'} hover:text-pink-400 transition-colors`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}