import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-dark to-lightDark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="gradient-text">Ashutosh Ranjan</span>
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            Professional Website Developer with 2 years of experience working with New Zealand based company QSOFTE.
          </p>

          <p className="text-gray-400 mb-8">
            I build responsive, modern and business-focused websites using React, Tailwind CSS, manual coding and CMS platforms.
          </p>

          <a
            href="/contact"
            className="bg-primary px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-full border-4 border-primary overflow-hidden shadow-2xl">
            <img
              src="/ashutosh.jpeg"
              alt="Ashutosh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero