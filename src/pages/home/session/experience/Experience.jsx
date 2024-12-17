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
            title : "Energi Terbarukan, Mampu Mengurangi Dampak Kerusakan di Bumi",
            description : "https://www.rri.co.id/iptek/676935/energi-terbarukan-mampu-mengurangi-dampak-kerusakan-di-bumi",
            image : "https://cdn.rri.co.id/berita/Palu/o/1715074135939-Untitled-1/xzzph656glvyw4g.jpeg"
        },
        {
            title : "Energi Terbarukan, Mampu Mengurangi Dampak Kerusakan di Bumi",
            description : "https://www.rri.co.id/iptek/676935/energi-terbarukan-mampu-mengurangi-dampak-kerusakan-di-bumi",
            image : "https://cdn.rri.co.id/berita/Palu/o/1715074135939-Untitled-1/xzzph656glvyw4g.jpeg"
        },
        {
            title : "Energi Terbarukan, Mampu Mengurangi Dampak Kerusakan di Bumi",
            description : "https://www.rri.co.id/iptek/676935/energi-terbarukan-mampu-mengurangi-dampak-kerusakan-di-bumi",
            image : "https://cdn.rri.co.id/berita/Palu/o/1715074135939-Untitled-1/xzzph656glvyw4g.jpeg"
        },
        {
            title : "Energi Terbarukan, Mampu Mengurangi Dampak Kerusakan di Bumi",
            description : "https://www.rri.co.id/iptek/676935/energi-terbarukan-mampu-mengurangi-dampak-kerusakan-di-bumi",
            image : "https://cdn.rri.co.id/berita/Palu/o/1715074135939-Untitled-1/xzzph656glvyw4g.jpeg"
        },
    ]

    return (
        <Fragment>
            <div className="experience-container" id='information'>
                <h1>Informasi</h1>
                <p>Berikut adalah beberapa artikel mengenai energi terbarukan</p>
                <div className="card-experience">
                    <Slider {...settings}>
                        {data.map((dataItem,idx) => (
                            <Card
                                key = {idx}
                                title = {dataItem.title}
                                description = {dataItem.description}
                                image = {dataItem.image}
                                index = {idx % 2 == 0 }
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience