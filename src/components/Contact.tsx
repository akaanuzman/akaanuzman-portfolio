import { UserIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Contact = () => {
  const inputVariants = {
    initial: {
      scale: 1,
      boxShadow: '0 0 0 rgba(var(--primary-rgb), 0)',
    },
    focus: {
      scale: 1.02,
      boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    },
    hover: {
      scale: 1.01,
      boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.2)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h2>
            <p className="text-xl text-base-content/80">
              Have a project in mind? Let's work together!
            </p>
          </div>

          <motion.div
            className="bg-base-200 rounded-2xl p-8 shadow-lg backdrop-blur-sm"
            variants={cardVariants}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  whileFocus="focus"
                  variants={inputVariants}
                  className="form-control relative"
                >
                  <label className="label">
                    <span className="label-text text-base-content/80">Name</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <UserIcon className="w-5 h-5 text-primary" />
                    </div>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="text"
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg bg-base-100/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial="initial"
                  whileHover="hover"
                  whileFocus="focus"
                  variants={inputVariants}
                  className="form-control relative"
                >
                  <label className="label">
                    <span className="label-text text-base-content/80">Email</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <EnvelopeIcon className="w-5 h-5 text-primary" />
                    </div>
                    <motion.input
                      whileFocus="focus"
                      variants={inputVariants}
                      type="email"
                      placeholder="example@example.com"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg bg-base-100/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial="initial"
                whileHover="hover"
                whileFocus="focus"
                variants={inputVariants}
                className="form-control relative"
              >
                <label className="label">
                  <span className="label-text text-base-content/80">Subject</span>
                </label>
                <div className="relative">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-2 border rounded-lg bg-base-100/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:outline-none transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                whileHover="hover"
                whileFocus="focus"
                variants={inputVariants}
                className="form-control relative"
              >
                <label className="label">
                  <span className="label-text text-base-content/80">Message</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary" />
                  </div>
                  <motion.textarea
                    whileFocus="focus"
                    variants={inputVariants}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg bg-base-100/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:outline-none resize-none transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="mailto:uzmanakan@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-base-100/30 backdrop-blur-sm hover:bg-base-100/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-base-content/60">uzmanakan@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+90 543 434 31 80"
                className="flex items-center gap-4 p-4 rounded-lg bg-base-100/30 backdrop-blur-sm hover:bg-base-100/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-base-content/60">+90 543 434 31 80</p>
                </div>
              </motion.a>

              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-base-100/30 backdrop-blur-sm hover:bg-base-100/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-base-content/60">Kutahya, Turkey</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 