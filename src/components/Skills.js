import React from 'react';
import Lottie from 'react-lottie';
import animationPointer from '../lotties/pointer.json';

import TeamWork from '../assets/images/teamwork.png';
import Creativity from '../assets/images/creativity.png';
import Communication from '../assets/images/communication.png';
import Thinking from '../assets/images/thinking.png';
import Solving from '../assets/images/solving.png';
import Learning from '../assets/images/learning.png';

const Skills = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPointer,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <section id="skills" class="relative bg-main-color">
            <h4 class="py-10 text-gray-600 text-xl font-semibold font-sourceCodePro text-center">Why Choose Me!</h4>
            <Lottie 
                options={defaultOptions}
                height={50}
                width={150}
            />

          <div class="grid grid-cols-1 sm:grid-cols-2 h-200 sm:h-90 md:h-150 pb-20">
            <div class="col-span-1 items-center justify-center mt-10 sm:mt-10 md:mt-2 pb-10  mx-5 sm:mx-10">
            <h2 class="text-center pb-10 text-xl text-gray-600 font-semibold font-sourceCodePro">
                Technical Skills <i class="fas fa-heart fa-xs"></i>
            </h2>
                <div class="bg-skill-card-color py-10 rounded-xl border-gray-600 border-2 shadow-md justify-center items-center 
                            ring-gray-600 ring-2 ring-opacity-5
                            border-pink-500 border-opacity-10
                            shadow-inner shadow-zinc-100/80">
            
                <div class="flex justify-evenly">
                        {/* HTML Skill */}
                        <div class="relative w-14 h-14 ">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">HTML</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation80"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="230.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">80%</text>
                            </svg>
                        </div>

                        {/* CSS Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">CSS</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="250.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">70%</text>
                            </svg>
                        </div>

                        {/* Bootstrap Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">Bootstrap</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="250.2"
                            />
                                <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">70%</text>
                            </svg>
                        </div>

                        {/* Tailwind Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">Tailwind</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation65"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="260.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">65%</text>
                            </svg>
                        </div>
                </div>

                <div class="pt-2 flex justify-evenly mt-8">
                        {/* JavaScript Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">JavaScript</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="251.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">70%</text>
                            </svg>
                        </div>

                        {/* React Skill */}
                        <div class="relative w-14 h-14 hover:animate-pulse">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">React</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation80"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="230.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">80%</text>
                            </svg>
                        </div>

                        {/* ReactNative Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">ReactNative</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="251.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">70%</text>
                            </svg>
                        </div>

                        {/* PHP Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">PHP</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation65"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="260.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">65%</text>
                            </svg>
                        </div>

                </div>

                <div class="pt-2 flex justify-evenly mt-8">
                        {/* Laravel Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">Laravel</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation65"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="260.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">65%</text>
                            </svg>
                        </div>

                        {/* MySQL Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">MySQL</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation65"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="260.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">65%</text>
                            </svg>
                        </div>

                        
                        {/* jQuery Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">jQuery</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation50"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="270"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">50%</text>
                            </svg>
                        </div>

                        
                        {/* NextJs Skill */}
                        <div class="relative w-14 h-14">
                            <p class="text-xs text-center pb-2 font-semibold font-varela text-gray-600">Next Js</p>
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                            />
                            <circle
                                class="text-circle-color progress-ring__circle stroke-current animate-progress-animation"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="0"
                                stroke-dasharray="251.2"
                            />
                            <text class="font-sourceCodePro text-base font-semibold text-xl" x="50" y="50" text-anchor="middle" alignment-baseline="middle">70%</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 items-center justify-center mt-10 mb-10 sm:mt-10 md:mt-2 pb-10 mx-5 sm:mx-10">
            <h2 class="text-center pb-10 text-xl text-gray-600 font-semibold font-sourceCodePro">
                Personal and Communication Skills  <i class="fas fa-heart fa-xs"></i>
            </h2>
            <div 
                class="bg-skill-card-color py-10 rounded-xl border-gray-600 border-2 shadow-md
                        ring-gray-600 ring-2 ring-opacity-5
                        border-pink-500 border-opacity-10
                        shadow-inner shadow-zinc-100/80"
            >
                <div class="flex justify-between">
                    <div class="flex flex-col items-center text-center w-40 p-4 sm:w-40 md:w-48 lg:w-56 xl:w-64"> 
                        <img class="w-2/5 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6" src={TeamWork} alt="Teamwork"/>
                        <p class="mt-2 font-medium font-varela text-gray-600">Teamwork</p>
                    </div>

                    <div class="flex flex-col items-center text-center w-40 p-4 sm:w-40 md:w-48 lg:w-56 xl:w-64"> 
                        <img class="w-2/5 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6" src={Creativity} alt="Creativity"/>
                        <p class="mt-2 font-medium font-varela text-gray-600">Creativity</p>
                    </div>

                    <div class="flex flex-col items-center text-center w-40 p-4 sm:w-40 md:w-48 lg:w-56 xl:w-64"> 
                        <img class="w-2/5 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6" src={Thinking} alt="Thinking"/>
                        <p class="mt-2 font-medium font-varela text-gray-600">Critical Thinking</p>
                    </div>
                </div>

                <div class="pt-2 flex justify-between mt-8">
                    <div class="flex flex-col items-center text-center w-40 p-2 sm:w-40 md:w-48 lg:w-56 xl:w-64"> 
                        <img class="w-2/5 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6" src={Solving} alt="Problem Solving"/>
                        <p class="mt-2 font-medium font-varela text-gray-600">Problem Solving</p>
                    </div>  

                    <div class="flex flex-col items-center text-center w-40 p-2 sm:w-40 md:w-48 lg:w-56 xl:w-64"> 
                        <img class="w-2/5 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6" src={Communication} alt="Communication"/>
                        <p class="mt-2 font-medium font-varela text-gray-600">Effective Communication</p>
                    </div>

                    <div class="flex flex-col items-center text-center w-40 p-2 sm:w-40 md:w-48 lg:w-56 xl:w-64"> 
                        <img class="w-2/5 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/6" src={Learning} alt="Learn"/>
                        <p class="mt-2 font-medium font-varela text-gray-600">Willingness to Learn</p>
                    </div>
                </div>

            </div>
            </div>
          </div>
        </section>
    )
}

export default Skills;