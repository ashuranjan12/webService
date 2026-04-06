import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaWordpress } from 'react-icons/fa'

function Services() {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: 'Custom Website Development',
      desc: 'Responsive websites built with React, HTML, CSS and JavaScript.'
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Business Website Design',
      desc: 'Professional websites for startups, businesses and personal brands.'
    },
    {
      icon: <FaWordpress size={40} />,
      title: 'CMS & WordPress',
      desc: 'Easy to manage CMS websites with WordPress and modern UI.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 gradient-text">My Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-lightDark p-8 rounded-2xl shadow-lg"
            >
              <div className="text-primary mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services