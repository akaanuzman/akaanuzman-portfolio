import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/akaanuzman',
            icon: FiGithub
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/akaanuzman',
            icon: FiLinkedin
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/akaanuzman',
            icon: FiTwitter
        }
    ];

    return (
        <footer className="py-8 md:py-12 bg-background/80 backdrop-blur-lg border-t border-primary/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-sm md:text-base text-foreground/80">
                            © {new Date().getFullYear()} Kaan Uzman. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                                <span className="sr-only">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-sm md:text-base text-foreground/60">
                            Made with ❤️ using Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 