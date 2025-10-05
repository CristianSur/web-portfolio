import {motion} from 'framer-motion'
import type {Variants} from 'framer-motion'

const Hero = () => {
    const containerVariants: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: {y: 50, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <section id="hero" className="hero">
            <motion.div
                className="hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-content" variants={itemVariants}>
                    <motion.h1
                        className="hero-title"
                        variants={itemVariants}
                    >
                        Hi, I'm <span className="highlight">Cristian</span>
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        variants={itemVariants}
                    >
                        Full Stack Developer & UI/UX Designer
                    </motion.p>
                    <motion.p
                        className="hero-description"
                        variants={itemVariants}
                    >
                        I create beautiful, functional, and user-centered digital experiences that bring ideas to life.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        variants={itemVariants}
                    >
                        <motion.button
                            className="btn btn-primary"
                            whileHover={{scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)"}}
                            whileTap={{scale: 0.95}}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            className="btn btn-secondary"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="hero-image"
                    variants={itemVariants}
                    whileHover={{scale: 1.05, rotate: 5}}
                >
                    <div className="profile-placeholder">
                        <div className="profile-icon">👨‍💻</div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className="scroll-indicator"
                animate={{y: [0, 10, 0]}}
                transition={{duration: 2, repeat: Infinity}}
            >
                <div className="scroll-arrow">↓</div>
            </motion.div>
        </section>
    )
}

export default Hero
