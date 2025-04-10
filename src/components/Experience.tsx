"use client";

import { motion, Variants } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";
import TypewriterText from "./TypewriterText";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
}

interface EducationItem {
    title: string;
    institution: string;
    period: string;
    location: string;
    description: string;
    gpa: string;
    achievements: string[];
    courses: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Frontend Developer",
        company: "Fiorent",
        period: "MAR 2025 - PRESENT",
        location: "İstanbul - Hybrid",
        description: "Developing a web application for a leading Turkish bank using React and Next.js. Collaborating with a team of 5 developers, focusing on performance optimization and user experience."
    },
    {
        title: "Senior Full Stack Developer",
        company: "Singularity Software Technologies",
        period: "DEC 2022 - MAR 2025",
        location: "Remote",
        description: "Led a team of 8 as Scrum Master for the Anytime project, which won the 2023 Dijifikir Championship. Integrated the project into 'Istanbul Senin' super app, automated deployments using Fastlane, and mentored three interns while maintaining clean code principles."
    },
    {
        title: "Mobile Application Developer",
        company: "Halisahavar",
        period: "DEC 2021 - DEC 2022",
        location: "Remote",
        description: "Developed the Sahavar mobile application using Flutter and MVVM architecture. Implemented Firebase authentication and designed the complete UI/UX experience."
    },
    {
        title: "Mobile Application Developer",
        company: "Kaposoft",
        period: "JUN 2022 - SEP 2022",
        location: "Düzce",
        description: "Developed the Sigorta Prime application for insurance process tracking using Flutter and API services. Started as an intern and continued as a contracted developer."
    },
    {
        title: "Mobile Application Developer",
        company: "Kuvarsoft",
        period: "JUL 2021 - SEP 2021",
        location: "Kütahya",
        description: "Developed a CRM application using Flutter and API services. Continued contributing as a volunteer after the internship period."
    }
];

const education: EducationItem[] = [
    {
        title: "Business Administration",
        institution: "Anadolu University",
        period: "2024 - 2028",
        location: "Kütahya",
        description: "Bachelor's degree in Business Administration to complement technical skills with business acumen.",
        gpa: "Ongoing",
        achievements: [
            "Dart Programming Language Rank #1 on Coders Club",
            "Flutter Framework Rank #3 on Coders Club"
        ],
        courses: [
            "Business Management",
            "Marketing",
            "Finance",
            "Economics",
            "Strategic Management"
        ]
    },
    {
        title: "Computer Engineering",
        institution: "Düzce University",
        period: "2019 - 2023",
        location: "Düzce",
        description: "Bachelor's degree in Computer Engineering with expertise in mobile and web development technologies.",
        gpa: "3.1/4.00",
        achievements: [
            "Developed multiple successful projects using Flutter and React",
            "Created various clones including Stack Overflow, GitHub, and Deezer",
            "Built a Digital Order System with AI integration",
            "Developed the Kandilli Observatory application"
        ],
        courses: [
            "Mobile Application Development",
            "Web Development",
            "Database Management Systems",
            "Data Structures and Algorithms",
            "Software Engineering"
        ]
    },
    {
        title: "English Language Program",
        institution: "Wimbledon Language Academy",
        period: "2022 - 2023",
        location: "Kütahya",
        description: "Intensive English language program to enhance international communication skills.",
        gpa: "N/A",
        achievements: [
            "Improved business communication skills",
            "Enhanced technical documentation capabilities",
            "Developed international collaboration abilities"
        ],
        courses: [
            "Business English",
            "Technical Writing",
            "Conversational English",
            "Professional Communication"
        ]
    }
];

export default function Experience() {
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="experience" className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 text-center hover-gradient"
                >
                    <TypewriterText text="Journey" />
                </motion.h2>

                <div className="max-w-6xl mx-auto">
                    {/* Experience Section */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Work Experience</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={`${exp.company}-${index}`}
                                    variants={itemVariants}
                                    className="group hover-card"
                                >
                                    <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 h-full">
                                        <div className="absolute top-4 right-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                <FiBriefcase className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-500" />
                                            </div>
                                        </div>
                                        <div className="pr-16">
                                            <h4 className="text-xl font-bold mb-2 gradient-text">{exp.title}</h4>
                                            <p className="text-lg font-semibold text-primary mb-1">{exp.company}</p>
                                            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                                                <span>{exp.period}</span>
                                                <span>•</span>
                                                <span>{exp.location}</span>
                                            </div>
                                            <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Education</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={`${edu.institution}-${index}`}
                                    variants={itemVariants}
                                    className="group hover-card"
                                >
                                    <div className="relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6">
                                        <div className="absolute top-4 right-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                <FiBook className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-500" />
                                            </div>
                                        </div>
                                        <div className="pr-16">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="text-xl font-bold gradient-text">{edu.title}</h4>
                                                    <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-lg font-semibold gradient-text">GPA: {edu.gpa}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                                                <span>{edu.period}</span>
                                                <span>•</span>
                                                <span>{edu.location}</span>
                                            </div>

                                            <p className="text-foreground/80 mb-6">{edu.description}</p>

                                            {/* Achievements */}
                                            <div className="mb-6">
                                                <h5 className="text-md font-semibold text-primary mb-3">Achievements</h5>
                                                <ul className="list-disc list-inside space-y-2">
                                                    {edu.achievements.map((achievement, i) => (
                                                        <li key={i} className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Key Courses */}
                                            <div>
                                                <h5 className="text-md font-semibold text-primary mb-3">Key Courses</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.courses.map((course, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-colors duration-300"
                                                        >
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 