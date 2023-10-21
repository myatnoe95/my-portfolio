import React from 'react';

import TULogo from '../assets/images/Hmawbi-logo.png';

const Education = () => {
    return(
        <section id="education" class="bg-testing-color py-5 border-t-2 border-b-2 border-gray-400">
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class=" flex flex-col items-center justify-center col-span-1">
                    <h3 class="py-6 text-2xl font-extrabold font-sourceCodePro text-center text-gray-600">./EDUCATION;</h3>
                </div>

                <div class="col-span-1 flex items-center justify-center mt-8 sm:mt-8 md:mt-2">
                    <div class="border-2 h-28 w-0 border-btn-color"></div>
                    <p class="pl-8 py-5 font-varela text-gray-600">
                    I went to college in Myanmar at the Hmawbi Technology University and graduated with a Bachelor of Technology and a Bachelor of Engineering, with a concentration in Information Technology. 
                    This college holds an ISO 9001:2015 certification.
                    </p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row justify-evenly items-center mt-7 pb-5 ">
                <div 
                    class="flex flex-col items-center text-center 
                    lg:w-1/5 sm:w-1/4 h-3/5 bg-edu-card-color 
                    p-4 sm:p-8 mb-20 sm:mb-0 
                    border border-pink-300 rounded-l-xl 
                    shadow-lg drop-shadow-xl hover:-translate-y-1 duration-300 transition ease-out"
                >
                    <img class="w-14 sm:w-1/3 md:w-1/4 lg:w-14 xl:w-1/6" src={TULogo} alt="Logo"/>
                    <h2 class="text-sm font-semibold mt-8 font-varela text-gray-600">Bachelor of Engineering (Information Technology)</h2>
                    <p class="text-gray-600 mt-4 font-varela text-gray-600">Technological University (Hmawbi)</p>
                </div>
                
                <div class="flex flex-col items-center text-center lg:w-1/5 sm:w-1/4 h-3/5  bg-edu-card-color p-4 sm:p-6 
                border border-pink-300 rounded-l-xl drop-shadow-xl shadow-lg hover:-translate-y-1 duration-300 transition ease-out">
                    <img class="w-14 sm:w-1/3 md:w-1/4 lg:w-14 xl:w-1/6" src={TULogo} alt="Logo"/>
                    <h2 class="text-sm font-semibold mt-8 font-varela text-gray-600">Bachelor of Technology (Information Technology)</h2>
                    <p class="text-gray-600 mt-4 font-varela text-gray-600">Technological University (Hmawbi)</p>
                </div>  
            </div>
        </section>
       
    )
}

export default Education;