import { Fragment, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
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
            <div className="contact-container" ref={contentRef}>
                <div className="content-left">
                    <div className="wrapper">
                        <div className="map">
                            <MapContainer className="mapStyle" center={[-6.979309, 107.628314]} zoom={15}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-6.979309, 107.628314]}>
                                    <Popup>
                                        My Address
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <div className='address-box'>
                            <h5>Map Street</h5>
                            <p>Sahabat Laundry Gg.H Atmawigena No.88 Citereup, KAB. Bandung, Dayeuhkolot, Jawa Barat, ID 40257</p>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="text-content">
                        <h1>Contact</h1>
                        <div className="address">
                            <h3>Address</h3>
                            <p>Sahabat Laundry Gg.Haji Atmawigena No.88, Desa Citereup, Kecamatan Dayeuhkolot, Kabupaten Bandung, 40257</p>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <p>ahlilfikri49@gmail.com</p>
                        </div>
                        <div className="telephone">
                            <h3>Telephone</h3>
                            <p>+62 882-1033-5073</p>
                        </div>
                        <div className="social-media">
                            <a href="https://www.instagram.com/ahlilfikri94" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="instagram" icon={faInstagram} size="xl" color="grey" />
                            </a>
                            <a href="https://www.linkedin.com/in/muhamad-ahlil-fikri-ba7a51282" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="xl" color="grey" />
                            </a>
                            <a href="https://github.com/ahlilfikri" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="github" icon={faGithub} size="xl" color="grey" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Contact;
