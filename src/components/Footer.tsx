import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/akaanuzman',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            ),
            color: 'primary'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/akaanuzman/',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" strokeWidth={2} />
                </svg>
            ),
            color: 'secondary'
        },
        {
            name: 'X (Twitter)',
            url: 'https://x.com/akaandev',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
            ),
            color: 'accent'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/akaanuzmann/',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round" />
                </svg>
            ),
            color: 'primary'
        },
    ];

    return (
        <footer className="bg-base-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center w-12 h-12 rounded-full bg-${link.color}/20 hover:bg-${link.color}/30 transition-all duration-300`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    type: 'spring',
                                    stiffness: 300
                                }}
                            >
                                <span className={`text-${link.color}`}>{link.icon}</span>
                                <span className="sr-only">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>
                    <motion.p
                        className="text-base-content/60 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        © {new Date().getFullYear()} Kaan Uzman. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 