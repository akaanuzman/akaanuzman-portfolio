import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
    const navItems = [
        { href: '#', label: 'Home' },
        { href: '#tech-stack', label: 'Tech Stack' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl font-bold gradient-text"
                    >
                        <Link href="#">KU</Link>
                    </motion.div>

                    <ul className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <motion.li
                                key={item.label}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-base-content/80 hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="md:hidden">
                        <button className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header; 