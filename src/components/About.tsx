import {motion, useInView} from 'framer-motion'
import type {Variants} from 'framer-motion'
import {useRef} from 'react'

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})

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
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="section-title" variants={itemVariants}>
                        About Me
                    </motion.h2>
                    <div className="about-content">
                        <motion.div className="about-text" variants={itemVariants}>
                            <p>
                                I'm a passionate full-stack developer with over 5 years of experience
                                creating digital solutions that make a difference. I love turning complex
                                problems into simple, beautiful, and intuitive designs.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open source projects, or sharing knowledge with the
                                developer community.
                            </p>
                            <motion.div
                                className="about-stats"
                                variants={itemVariants}
                            >
                                <div className="stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">100+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="about-image"
                            variants={itemVariants}
                            whileHover={{scale: 1.05}}
                        >
                            <div className="image-placeholder">
                                <div className="about-icon">🚀</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
