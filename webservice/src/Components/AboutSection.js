import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

function AboutAndSocialSection() {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      title: 'Instagram',
      username: 'ashutoshranjan_',
      link: 'https://instagram.com/ashutoshranjan_',
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: 'GitHub',
      username: 'github.com/ashuranjan12',
      link: 'https://github.com/ashuranjan12',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      username: 'linkedin.com/in/Ashutosh Ranjan',
      link: 'https://linkedin.com/in/Ashutosh Ranjan',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  const clientFeedbacks = [
    {
      name: 'John Doe',
      feedback:
        'Ashutosh developed a fantastic website for our business. Very professional and fast!',
    },
    {
      name: 'Jane Smith',
      feedback:
        'Great experience working with Ashutosh. Highly recommended for web development projects.',
    },
  ]

  return (
    <div className="bg-[#050816] text-white">
      {/* ===== About Me Section ===== */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-cyan-300 mb-5">
              About Me
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              I’m Ashutosh Ranjan
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              I have over 2 years of experience building custom websites for businesses using manual coding and CMS platforms. My focus is on writing clean, efficient, and maintainable code that delivers seamless user experiences.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Here’s what some of my clients say about my work:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {clientFeedbacks.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
              >
                <p className="text-gray-300 mb-4">&quot;{client.feedback}&quot;</p>
                <h4 className="font-semibold text-white">{client.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Social Media Section ===== */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-cyan-300 mb-5">
              Connect With Me
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Follow Me On
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Stay connected with me through my social platforms where I share projects, updates, and professional content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-left shadow-[0_10px_50px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${social.gradient} blur-3xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition duration-300`}
                  >
                    {social.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{social.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition duration-300">
                    {social.username}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutAndSocialSection