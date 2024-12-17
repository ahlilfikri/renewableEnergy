import { Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from '../../../../components/card/Card'
import settings from '../../../../constanta/experience-setting/ExperienceSetting'
import './Experience.css'

const Experience = () =>{
    const data = [
        {
            title : "PDAM Tirta Kerta Raharja administration",
            description : "Administration website for internal PDAM Tirta Kerta Raharja",
            image : "/portofolio/PDAMTKR.png"
        },
        {
            title : "PDAM Tirta Kerta Raharja Training center",
            description : "Training Website For External or PDAM Tirta Kerta Raharja Employee ",
            image : "/portofolio/PDAMTKR.png"
        },
        {
            title : "PT Rahayu Antara Nusindo",
            description : "Company Profile Website For PT Rahayu Antara Nusindo",
            image : "/portofolio/RAN.png"
        },
        {
            title : "Layanan Sistem Informasi Desa (SID) Wareng",
            description : "Digital Admnistration For Wareng Village",
            image : "/portofolio/LogoWareng.svg"
        },
        {
            title : "Herbal Yuniari",
            description : "Company Profile Website For UMKM Herbal Yuniari",
            image : "/portofolio/HerbalYuniari.png"
        },
        {
            title : "SISTEM PELAPORAN KEJADIAN GANGGUAN, KEAMANAN DAN KETERTIBAN MASYARAKAT (SIJAGAMAS)",
            description : "SIJAGAMAS enables quick reporting of public disturbances and security issues. It features a user-friendly interface and real-time notifications to help authorities promptly address incidents, enhancing community safety.",
            image : "/portofolio/SIJAGAMAS.png"
        }
    ]

    return (
        <Fragment>
            <div className="experience-container">
                <h1>Experience</h1>
                <p>here is few my past project or under constructing project</p>
                <div className="card-experience">
                    <Slider {...settings}>
                        {data.map((dataItem,idx) => (
                            <Card
                                key = {idx}
                                title = {dataItem.title}
                                description = {dataItem.description}
                                image = {dataItem.image}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience