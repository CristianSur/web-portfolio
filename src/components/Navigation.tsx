import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <motion.nav
            className={`navigation ${isScrolled ? 'scrolled' : ''}`}
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="nav-container">
                <motion.div
                    className="logo"
                    whileHover={{scale: 1.05}}
                    onClick={() => scrollToSection('hero')}
                >
                    Portfolio
                </motion.div>
                <ul className="nav-links">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <motion.li
                            key={item}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                        >
                            <button
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="nav-link"
                            >
                                {item}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navigation
