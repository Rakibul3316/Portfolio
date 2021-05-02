import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import frontEnd from '../img/front-end.png';
import BackEnd from '../img/back-end.png';
import responsive from '../img/res.png';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Html'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Css'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Express Js'} progress={'850%'} width={'85%'} />
                <SkillsSection skill={'MongoDB'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={frontEnd} title={'Front-End Web Development'}
                    text={'I am to much experience in this field.'}
                />
                <ServicesSection image={BackEnd} title={'Back-End Web Development'}
                    text={'I was developed many REST Api using Node, Experss, MongoDB, Mongoose'}
                />
                <ServicesSection image={responsive} title={'Responsive Web desing'}
                    text={'I built 10+ responsive websites. '}
                />
            </div>

        </div>
    )
}

export default AboutPage;
