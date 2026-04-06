import { useRef } from 'react'
import emailjs from 'emailjs-com'

function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        alert('Message sent successfully!')
      })
      .catch(() => {
        alert('Something went wrong!')
      })

    e.target.reset()
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-dark">
      <div className="bg-lightDark p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-dark border border-gray-700 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-dark border border-gray-700 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full p-4 rounded-xl bg-dark border border-gray-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-primary py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm