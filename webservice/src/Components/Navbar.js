import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png' // <-- put your logo image in src/assets folder

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    hidden: { height: 0, opacity: 0, transition: { when: 'afterChildren' } },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <nav className="bg-lightDark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.img
            src={logo}
            alt="WebService Logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-20 md:h-20 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="hover:text-primary transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-lightDark px-6 pb-6 flex flex-col gap-4"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={idx}
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  to={link.path}
                  className="text-lg hover:text-primary transition-all duration-300 block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar