import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
} from 'react-icons/fa'

function ContactForm() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' }) // Reset status

    emailjs
      .sendForm(
        'service_ukx68nc',
        'template_xkb30me',
        form.current,
        'IWBeSS7rGQRxeT6I7'
      )
      .then((result) => {
        console.log('SUCCESS!', result.text)
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        e.target.reset()
        setLoading(false)
      })
      .catch((error) => {
        console.log('FAILED...', error)
        setStatus({
          type: 'error',
          message:
            error?.text || 'Something went wrong! Please check your inputs.',
        })
        setLoading(false)
      })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[#050816] overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:55px_55px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-cyan-300 mb-6">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Have a project idea, business website requirement or just want to
            connect? Fill out the form and I’ll get back to you as soon as
            possible.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-400">ashuranjan029@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400">+91 91358707XX</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-400">India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-[40px]" />

          <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-10 shadow-[0_10px_60px_rgba(0,0,0,0.45)]">
            <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1120]/80 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1120]/80 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0B1120]/80 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition resize-none"
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <p
                  className={`text-sm font-medium ${
                    status.type === 'success' ? 'text-green-400' : 'text-red-500'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <motion.button
                whileHover={{ scale: loading ? 1 : 1.03 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                type="submit"
                disabled={loading}
                className="group w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm