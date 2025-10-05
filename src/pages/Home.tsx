import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation'

const Home = () => {
    return (
        <div className="portfolio-container">
            <Navigation/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Home
