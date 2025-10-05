import {motion, useInView, type Variants} from 'framer-motion'
import {useRef, useState} from 'react'

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({name: '', email: '', message: ''})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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
        <section id="contact" className="contact" ref={ref}>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 className="section-title" variants={itemVariants}>
                        Get In Touch
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={itemVariants}>
                        Let's work together to bring your ideas to life
                    </motion.p>
                    <div className="contact-content">
                        <motion.div className="contact-info" variants={itemVariants}>
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div className="contact-details">
                                    <h3>Email</h3>
                                    <p style={{ color: 'white' }}>your.email@example.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div className="contact-details">
                                    <h3>Phone</h3>
                                    <p style={{ color: 'white' }}>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-details">
                                    <h3>Location</h3>
                                    <p style={{ color: 'white' }}>San Francisco, CA</p>
                                </div>
                            </div>
                            <div className="social-links">
                                <motion.a style={{ color: 'white' }}
                                    href="#"
                                    className="social-link"
                                    whileHover={{scale: 1.2, rotate: 5}}
                                    whileTap={{scale: 0.9}}
                                >
                                    GitHub
                                </motion.a>
                                <motion.a style={{ color: 'white' }}
                                    href="#"
                                    className="social-link"
                                    whileHover={{scale: 1.2, rotate: 5}}
                                    whileTap={{scale: 0.9}}
                                >
                                    LinkedIn
                                </motion.a>
                                <motion.a style={{ color: 'white' }}
                                    href="#"
                                    className="social-link"
                                    whileHover={{scale: 1.2, rotate: 5}}
                                    whileTap={{scale: 0.9}}
                                >
                                    Twitter
                                </motion.a>
                            </div>
                        </motion.div>
                        <motion.form
                            className="contact-form"
                            variants={itemVariants}
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                            </div>
                            <motion.button
                                type="submit"
                                className="btn btn-primary"
                                whileHover={{scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)"}}
                                whileTap={{scale: 0.95}}
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
            <motion.footer
                className="footer"
                initial={{opacity: 0}}
                animate={isInView ? {opacity: 1} : {opacity: 0}}
                transition={{duration: 0.8, delay: 0.5}}
            >
                <div className="container">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                </div>
            </motion.footer>
        </section>
    )
}

export default Contact
