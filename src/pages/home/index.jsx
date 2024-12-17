import { Fragment } from 'react';
import NavBar from "../../components/nav-bar/NavBar";
import Introduction from './session/introduction/Introduction';
import AboutMe from './session/about-me/AboutMe';
import Experience from './session/experience/Experience';
import Contact from './session/contact/Contact';
import Footer from '../../components/footer/Footer';
import './index.css'

const Home = () => {
    return (
        <Fragment >
            <div className="home-wrapper">
                <NavBar/>
                <section id='introduction'>
                    <Introduction/>
                </section>
                <section id='aboutMe'>
                    <AboutMe /> 
                </section>
                <section id='experience'>
                    <Experience />
                </section>
                <section id='contact'>
                    <Contact />
                </section>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home