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
                <h1>About Me</h1>
                <p>Hello, my name is Muhamad Ahlil Fikri. I am a 6th-semester student majoring in Information Technology at Telkom University, and I am currently an active student. I have a strong interest in developing and building dynamic, responsive, and user-friendly websites. Additionally, I have one year of experience working as a full-stack web developer. Currently, I am also participating in the Bangkit Academy 2024 program with a focus on the Android Learning Path to further enhance my skills and knowledge in mobile application development.</p>
                <button className="btn btn-secondary" onClick={modal}>View My Resume</button>
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
