import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <section className="py-20 px-6 bg-lightDark min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/ashutosh.jpeg"
            alt="Ashutosh"
            className="rounded-3xl shadow-2xl w-full max-w-md mx-auto border-4 border-primary"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>

          <p className="text-gray-300 text-lg leading-8 mb-4">
            My name is Ashutosh Ranjan and I am a passionate website developer with 2 years of professional experience.
          </p>

          <p className="text-gray-400 leading-8 mb-4">
            I have worked with QSOFTE, a New Zealand based company, where I gained experience in developing responsive websites, business websites, CMS platforms and user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-8">
            My goal is to help businesses build a strong online presence with modern, fast and attractive websites.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection