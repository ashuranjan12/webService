import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Globe, Code2 } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070B14] text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm text-gray-300">
                Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            >
              Building Modern
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Premium Websites
              </span>
              for Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-6"
            >
              Hi, I'm <span className="text-white font-semibold">Ashutosh Ranjan</span> — a professional website developer with 2 years of experience working with New Zealand based company QSOFTE.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg mb-10 max-w-xl"
            >
              I create responsive, high-converting websites using React, Tailwind CSS, CMS platforms and custom coding — designed to help businesses grow online.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 hover:shadow-cyan-500/50 transition duration-300"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>

              <a
                href="/about"
                className="px-7 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-200 hover:bg-white/10 transition duration-300"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-y-[-5px] transition duration-300">
                <Briefcase className="w-6 h-6 text-cyan-400 mb-3" />
                <h3 className="text-2xl font-bold">2+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-y-[-5px] transition duration-300">
                <Globe className="w-6 h-6 text-cyan-400 mb-3" />
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-gray-400 text-sm">Websites Delivered</p>
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-y-[-5px] transition duration-300">
                <Code2 className="w-6 h-6 text-cyan-400 mb-3" />
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-gray-400 text-sm">Custom Built</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-30 animate-pulse" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative w-[340px] h-[420px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >
              <img
                src="/ashutosh.jpeg"
                alt="Ashutosh"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <h3 className="text-xl font-semibold">Ashutosh Ranjan</h3>
                <p className="text-sm text-gray-300 mt-1">
                  React Developer • CMS Expert
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
