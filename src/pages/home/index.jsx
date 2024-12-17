import { Fragment, useState } from 'react';
import NavBar from "../../components/nav-bar/NavBar";
import Introduction from './session/introduction/Introduction';
import AboutMe from './session/about-me/AboutMe';
import Experience from './session/experience/Experience';
import Contact from './session/contact/Contact';
import Footer from '../../components/footer/Footer';
import './index.css';

const Home = () => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Fragment>
            <div className="home-wrapper">
                {/* Modal Notification */}
                {showModal && (
                    <div className="notification-modal">
                        <div className="notification-content">
                            <span className="close-btn" onClick={closeModal}>&times;</span>
                            {/* <span className="close-btn" onClick={closeModal}>tutu</span> */}
                            <h4>Ada Update Informasi Terbaru!</h4>
                            <p>Ayo Baca Artikel Terbaru Mengenai Energi Terbarukan </p>
                            <p><a href="https://www.rri.co.id/iptek/676935/energi-terbarukan-mampu-mengurangi-dampak-kerusakan-di-bumi"><button>Baca Disini!</button></a></p>
                        </div>
                    </div>
                )}
                <NavBar />
                <section id='introduction'>
                    <Introduction />
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

export default Home;
