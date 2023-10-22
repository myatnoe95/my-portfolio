import React from 'react';
import Carousel from 'react-elastic-carousel';

import TNS from '../assets/images/tns_logo.png';
import WEWASAND from '../assets/images/Wewasand.png';
import Agga from '../assets/images/Agga.png';
import GreenHacker from '../assets/images/greenhacker.png';
import Microservice from '../assets/images/Microservice.png';

const WorkingExperiences = () => {

    const items =   [
        {
            id: 1, 
            logo: WEWASAND, 
            position: 'Frontend Developer', 
            companyName: 'WE WASANAD.Co Ltd.,Thailand', 
            detail: "With about six months of experience, I am now working as a Frontend Developer for my current employer. I have experience working with a wide range of technologies, including C#, PHP, Next.js, and React. I have worked on government projects and the creation of learning systems, among other things."
        },
        {
            id: 2, 
            logo: TNS, 
            position: 'Mobile Developer', 
            companyName: 'New Stars Inc, Philippines', 
            detail: 'I was working as a Mobile Developer at a company located in the Philippines and have been working for approximately five months. In my role, I specialize in the development of gambling apps, leveraging technologies such as React Native, TypeScript, and Jest for unit testing.'
        },
        {
            id: 3, 
            logo: Agga, 
            position: 'Web Developer', 
            companyName: 'AGGA.IO Ltd.,Yangon', 
            detail: 'I spent two years working in this company as a Web Developer and Mobile Developer. I have obtained knowledge about React Native and Expo for mobile app development as well as React and Laravel for web application development. I have experience working on both public and private initiatives.'
        },
        {
            id: 4, 
            logo: Microservice, 
            position: 'Junior Frontend Developer', 
            companyName: 'MICRO SERVICES MYANMAR Ltd.,Yangon', 
            detail: 'As a Junior Web Developer, I worked for this company for almost a year and engaged in projects for social platforms and the government. These two programming languages, React and Laravel, were utilised to create the applications.'
        },
        {
            id: 5, 
            logo: GreenHacker, 
            position: 'Junior Developer', 
            companyName: 'GREEN HACKERS INSTITUTE, Yangon', 
            detail: 'I completed an internship as a Junior Developer at this company. Starting from this point, I gained experience for an actual work environment and gained technical expertise.'
        },
      ]
    return(
        <section id="experiences" class="py-5 bg-section-color">
            <h3 class="py-6 text-font-highlight text-2xl font-extrabold font-sourceCodePro text-center text-gray-600">./WORKING EXPERIENCES;</h3>
            <Carousel itemsToShow={1}>
                {
                    items.map((item,index)=>{
                        const {logo, position, companyName, detail} = item || {};
                        return(
                            <div class="flex flex-col px-4 w-4/5" key={index}>
                                <div class="h-36">
                                    <img class="w-2/4 sm:w-1/4 h-4/5" src={logo}></img>
                                </div>
                                <div class="">
                                    <p class="font-varela text-lg font-bold text-gray-600">{position}</p>
                                    <p class="font-varela text-lg mt-2 text-gray-600">{companyName}</p>
                                    <p class="mt-4 font-varela text-gray-600">{detail}</p>
                                </div>  
                            </div>
                        )
                    })
                }
            </Carousel>
        </section>
    )
}

export default WorkingExperiences;