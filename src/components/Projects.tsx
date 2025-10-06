import {motion, useInView, type Variants} from 'framer-motion'
import {useRef} from 'react'

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
            image: '🛒',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 2,
            title: 'Task Management App v2',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '📋',
            technologies: ['Vue.js', 'Socket.io', 'PostgreSQL', 'Redis'],
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
            image: '🌤️',
            technologies: ['React', 'D3.js', 'OpenWeather API', 'Mapbox'],
            liveUrl: '#',
            githubUrl: '#'
        }
    ]

    const containerVariants: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants: Variants = {
        hidden: {y: 50, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section id="projects" className="projects" ref={ref}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="section-title" variants={itemVariants}>
                        Featured Projects
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={itemVariants}>
                        Here are some of my recent projects that I'm proud of
                    </motion.p>
                    <motion.div className="projects-grid" variants={itemVariants}>
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                                whileTap={{scale: 0.98}}
                            >
                                <div className="project-image">
                                    <div className="project-icon">{project.image}</div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-technologies">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <motion.a
                                            href={project.liveUrl}
                                            className="project-link"
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                        >
                                            Live Demo
                                        </motion.a>
                                        <motion.a
                                            href={project.githubUrl}
                                            className="project-link"
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                        >
                                            GitHub
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
