import React from 'react';
import NavBar from "../../components/nav-bar/NavBar";
import Angin from "../../assets/angin.svg"
import Air from "../../assets/air.svg"
import Matahari from "../../assets/matahari.svg"
import Daun from "../../assets/daun.svg"
import "./Monitoring.css";

const Monitoring = () => {
    return (
        <div className="monitoring-container">
            <NavBar />
            <h1>Monitoring</h1>
            <div className="card-container">
                <Card title="Angin" value="75%" image={Angin} />
                <Card title="Air" value="60%" image={Air}/>
                <Card title="Matahri" value="80%" image={Matahari}/>
                <Card title="Biomassa" value="10%" image={Daun}/>
            </div>
        </div>
    );
};

const Card = ({ title, value, image }) => {
    return (
        <div className="card">
            <div className="content">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="text">
                    <h2>Energi {title}</h2>
                    <div className="status1">
                        <p>{value}</p>
                        <p>3hr ago</p>
                    </div>
                    <div className="status2">
                        <p>Full time</p>
                        <p>0 applied</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Monitoring;