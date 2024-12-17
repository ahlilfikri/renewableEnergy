// import { useSpring, animated } from 'react-spring';
import './Introduction.css'

const Introduction = () => {

    // const animation = useSpring({
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    // })
      

    return (
        <div className="introduction-container">
            <div className="content-left" >
                <div className="text-content">
                    <h1 className="first-h1">Hey, I am</h1>
                    <h1 className="second-h1">Muhamad Ahlil Fikri</h1>
                    <p>Student at Telkom University | Web Developer Enthusiast | Studying Android Developer</p>
                </div>
            </div>
            <div className="content-right">
                <div className="image"></div>
            </div>
        </div>
    );
};

export default Introduction;
