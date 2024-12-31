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
        title: "Mid Full Stack Developer",
        company: "Singularity Software Technologies",
        period: "DEC 2022 - Present",
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
        <section className="py-20 relative">
            {/* Animated path background */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M 0,50 C 20,40 30,60 50,50 C 70,40 80,60 100,50"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeDasharray="5,5"
                        fill="none"
                        className="text-primary/20"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-16 text-center hover-gradient"
                >
                    <TypewriterText text="Journey" />
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 relative">
                    {/* Experience Section */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={`${exp.company}-${index}`}
                                variants={itemVariants}
                                className="group relative"
                            >
                                {/* Connection line */}
                                <div className="absolute top-0 left-[27px] w-0.5 h-full bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20" />

                                {/* Timeline item */}
                                <div className="flex gap-6">
                                    {/* Icon */}
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-500">
                                            <FiBriefcase className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 group-hover:border-primary/30 transition-all duration-500">
                                            {/* Animated gradient background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <h3 className="text-xl font-bold mb-2 gradient-text">{exp.title}</h3>
                                                <h4 className="text-lg font-semibold text-primary mb-1">{exp.company}</h4>
                                                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                                                    <span>{exp.period}</span>
                                                    <span>•</span>
                                                    <span>{exp.location}</span>
                                                </div>
                                                <p className="text-foreground/80">{exp.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {education.map((edu, index) => (
                            <motion.div
                                key={`${edu.institution}-${index}`}
                                variants={itemVariants}
                                className="group relative"
                            >
                                {/* Connection line */}
                                <div className="absolute top-0 left-[27px] w-0.5 h-full bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20" />

                                {/* Timeline item */}
                                <div className="flex gap-6">
                                    {/* Icon */}
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-500">
                                            <FiBook className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 group-hover:border-primary/30 transition-all duration-500">
                                            {/* Animated gradient background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                            
                                            {/* Content */}
                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold gradient-text">{edu.title}</h3>
                                                        <h4 className="text-lg font-semibold text-primary">{edu.institution}</h4>
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

                                                {/* Relevant Courses */}
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
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 