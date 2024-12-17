import { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import './AboutMe.css'
import Modal from "../../../../components/modal/Modal"

const AboutMe = () => {
    const [resumeOpen, setResumeOpen] = useState(false);

    const modal = () => {
        setResumeOpen(true);
    }

    const contentRef = useRef(null);

    useEffect(() => {
        const contentElement = contentRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contentElement.style.opacity = '1';
                }
            });
        });

        observer.observe(contentElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Fragment>
            <div className="about-me-container" ref={contentRef}>
                <h1>Tentang Kami</h1>
                <p>Dalam era modern ini, penggunaan energi terbarukan semakin penting untuk mengurangi dampak negatif terhadap lingkungan dan memastikan keberlanjutan sumber daya alam. Namun, meskipun kesadaran akan pentingnya energi terbarukan terus berkembang, masih banyak individu yang kesulitan untuk memantau dan mengelola konsumsi energi mereka, khususnya di lingkungan kampus atau komunitas.</p>
                <p>Aplikasi Edu Energy hadir untuk menjawab tantangan tersebut dengan menyediakan solusi digital yang sederhana namun efektif dalam memantau konsumsi energi terbarukan secara real-time. Selain itu, aplikasi ini juga dilengkapi dengan fitur yang memungkinkan pengguna untuk mengatur batasan konsumsi energi tidak terbarukan dan menerima notifikasi otomatis jika batas tersebut terlampaui. Tujuan utama dari aplikasi ini adalah untuk meningkatkan kesadaran pengguna, terutama mahasiswa, mengenai pentingnya mengelola energi secara bertanggung jawab dan berkelanjutan.</p>
            </div>
            <Modal
                isOpen={resumeOpen}
                onClose={() => setResumeOpen(false)}
                image={"/portofolio/CV_MuhamadAhlilFikri.png"}
            />
        </Fragment>
    )
};

export default AboutMe;
