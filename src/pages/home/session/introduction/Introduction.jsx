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
                    <h1 className="first-h1">Hai, kami</h1>
                    <h1 className="second-h1">Edu Energy</h1>
                    <p class="text-justify">Aplikasi yang membantu Anda memantau penggunaan energi terbarukan secara real-time dan mengelola konsumsi energi tidak terbarukan</p>
                </div>
            </div>
            {/* <div className="content-right">
                <div className="image"></div>
            </div> */}
        </div>
    );
};

export default Introduction;
