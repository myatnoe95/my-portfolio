import React from 'react';
import Lottie from 'react-lottie';

import animationCloud from '../lotties/cloud.json';

import PhooImage from '../assets/images/IMG2.jpg';

const Info = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCloud,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
      };
    return(
        <div class="bg-testing-color py-16">
            <div class="absolute top-0 right-0 md:top-2 md:right-2 lg:top-4 lg:right-4">
                <Lottie 
                    options={defaultOptions}
                    height={150}
                    width={150}
                />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/5 sm:w-3/6 rounded-xl border-gray-600 border-2" src={PhooImage}/>
                </div>
        
                <div class="col-span-1 self-center p-10">
                    <h3 class="text-2xl font-bold font-sourceCodePro text-gray-600">:/HELLO;</h3>
                    <p class="py-8 font-varela font-medium text-gray-600">MY NAME IS MYAT NOE KYI PHYU <span class="italic font-varela text-pink-400">(KHING SUN THWE)</span>.</p>
                    <p class="font-varela font-medium text-gray-600">
                        I'm  working as a Web Developer & Mobile Developer based in Bangkok, 
                        with a deep passion for coding, watching lines of code come to life, 
                        and making things work seamlessly.
                    </p>
                    <button 
                        class="
                            bg-btn-color
                            ring-gray-600 ring-2 ring-opacity-5
                            border-pink-500 border-opacity-10
                            shadow-inner shadow-zinc-100/80
                            my-8 w-36 p-2 text-white font-varela text-sm 
                            rounded-md  text-base font-medium"
                            
                        onClick={()=> window.open("https://drive.google.com/drive/folders/13NDmOIl4enmsYC_t6qkjpETl4eQlmTHr?usp=sharing")}
                    >
                       Get My Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info;