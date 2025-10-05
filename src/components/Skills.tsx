import {motion, useInView, type Variants} from 'framer-motion'
import {useRef} from 'react'

const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})

    const skills = [
        {name: 'Java & Kotlin', level: 90, color: '#61DAFB'},
        {name: 'Python', level: 85, color: '#3178C6'},
        {name: 'React', level: 80, color: '#339933'},
        {name: 'Spring', level: 90, color: '#61DAFB'},
        {name: 'FastAPI', level: 85, color: '#3178C6'},
        {name: 'AWS', level: 65, color: '#FF9900'},
    ]

    const containerVariants: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section id="skills" className="skills" ref={ref}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="section-title" variants={itemVariants}>
                        Skills & Technologies
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={itemVariants}>
                        Here are some of the technologies I work with
                    </motion.p>
                    <motion.div className="skills-grid" variants={itemVariants}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="skill-card"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                                }}
                                whileTap={{scale: 0.95}}
                            >
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <motion.div
                                        className="skill-progress"
                                        style={{backgroundColor: skill.color}}
                                        initial={{width: 0}}
                                        animate={isInView ? {width: `${skill.level}%`} : {width: 0}}
                                        transition={{
                                            duration: 1.5,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="skills-summary"
                        variants={itemVariants}
                    >
                        <p style={{ color: 'white' }}>
                            I'm always learning and staying up-to-date with the latest technologies
                            and best practices in web development. I believe in writing clean,
                            maintainable code and creating user experiences that are both beautiful
                            and functional.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
