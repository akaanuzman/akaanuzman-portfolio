// import { motion } from 'framer-motion';
// import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
// import TypewriterText from './TypewriterText';

// const Contact = () => {
//   const container = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: 'spring',
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: 'spring',
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <section id="contact" className="py-12 md:py-20">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 text-center hover-gradient"
//         >
//           <TypewriterText text="Get in Touch" />
//         </motion.h2>

//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
//           >
//             {/* Contact Info */}
//             <motion.div variants={item} className="space-y-6">
//               <div className="hover-card group">
//                 <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 md:p-6">
//                   <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Contact Information</h3>
//                   <div className="space-y-4">
//                     <motion.div
//                       className="flex items-center gap-3 glow"
//                       whileHover={{ x: 5 }}
//                       transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                     >
//                       <div className="relative">
//                         <FiMail className="w-5 h-5 text-primary animate-pulse" />
//                         <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse" />
//                       </div>
//                       <a href="mailto:uzmanakan@gmail.com" className="text-sm md:text-base shimmer">
//                         uzmanakan@gmail.com
//                       </a>
//                     </motion.div>
//                     <motion.div
//                       className="flex items-center gap-3 glow"
//                       whileHover={{ x: 5 }}
//                       transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                     >
//                       <div className="relative">
//                         <FiMapPin className="w-5 h-5 text-primary animate-pulse" />
//                         <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse" />
//                       </div>
//                       <span className="text-sm md:text-base shimmer">Istanbul, Turkey</span>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>

//               <div className="hover-card group">
//                 <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 md:p-6">
//                   <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text">Social Media</h3>
//                   <div className="flex gap-4">
//                     <motion.a
//                       href="https://github.com/akaanuzman"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="relative p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <FiGithub className="w-6 h-6 group-hover:text-primary transition-colors" />
//                       <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </motion.a>
//                     <motion.a
//                       href="https://linkedin.com/in/akaanuzman"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="relative p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
//                       whileHover={{ scale: 1.1, rotate: -5 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <FiLinkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
//                       <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </motion.a>
//                     <motion.a
//                       href="https://twitter.com/akaanuzmann"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="relative p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <FiTwitter className="w-6 h-6 group-hover:text-primary transition-colors" />
//                       <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </motion.a>
//                     <motion.a
//                       href="https://instagram.com/akaanuzmann"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="relative p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
//                       whileHover={{ scale: 1.1, rotate: -5 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <FiInstagram className="w-6 h-6 group-hover:text-primary transition-colors" />
//                       <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div variants={item}>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm md:text-base font-medium mb-2 gradient-text">
//                     Name
//                   </label>
//                   <motion.div
//                     whileHover={{ scale: 1.01 }}
//                     whileTap={{ scale: 0.99 }}
//                   >
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       className="w-full px-4 py-2 bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg 
//                                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
//                                transition-all duration-300 hover:border-primary/30"
//                     />
//                   </motion.div>
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm md:text-base font-medium mb-2 gradient-text">
//                     Email
//                   </label>
//                   <motion.div
//                     whileHover={{ scale: 1.01 }}
//                     whileTap={{ scale: 0.99 }}
//                   >
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       className="w-full px-4 py-2 bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg 
//                                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
//                                transition-all duration-300 hover:border-primary/30"
//                     />
//                   </motion.div>
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm md:text-base font-medium mb-2 gradient-text">
//                     Message
//                   </label>
//                   <motion.div
//                     whileHover={{ scale: 1.01 }}
//                     whileTap={{ scale: 0.99 }}
//                   >
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       required
//                       className="w-full px-4 py-2 bg-background/50 backdrop-blur-sm border border-primary/10 rounded-lg 
//                                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
//                                transition-all duration-300 hover:border-primary/30"
//                     ></textarea>
//                   </motion.div>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   className="w-full px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg 
//                            shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 
//                            transition-all duration-300 relative overflow-hidden group"
//                 >
//                   <span className="relative z-10">Send Message</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact; 