import { motion } from 'framer-motion'
import {
  FaCode,
  FaLaptopCode,
  FaWordpress,
  FaArrowRight,
} from 'react-icons/fa'

function Services() {
  const services = [
    {
      icon: <FaCode size={34} />,
      title: 'Custom Website Development',
      desc: 'Responsive and high-performance websites built with React, HTML, CSS and JavaScript for modern businesses.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <FaLaptopCode size={34} />,
      title: 'Business Website Design',
      desc: 'Premium business websites designed for startups, brands and professionals to build trust and grow online.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <FaWordpress size={34} />,
      title: 'CMS & WordPress Solutions',
      desc: 'Easy-to-manage CMS and WordPress websites with clean UI, strong performance and modern design.',
      gradient: 'from-emerald-500 to-teal-600',
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#050816] overflow-hidden text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-cyan-300 mb-5">
            My Expertise
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Services That Help
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Businesses Grow Online
            </span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            I provide complete website solutions for businesses, startups and personal brands — combining modern design, performance and user experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-500"
            >
              {/* Glow Hover Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${service.gradient} blur-3xl`}
              />

              {/* Card Content */}
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:gap-3 transition-all duration-300"
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </a>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[30px] border border-white/5 pointer-events-none group-hover:border-cyan-400/30 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services