import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-lightDark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold gradient-text"
        >
          WebService
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-primary transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-lightDark text-lg">
          <Link
            to="/"
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar