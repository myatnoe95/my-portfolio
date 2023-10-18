import React from 'react';

const Header = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
      };
    return (
        <nav class="flex items-center justify-center flex-wrap bg-testing-color p-6">
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-center lg:flex-grow">
                <a class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 text-lg hover:text-pink-400 mr-4 font-varela cursor-grabbing" onClick={() => scrollToSection("about")}>
                    About Me
                </a>
                <a href="javascript:void(0)" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 text-lg hover:text-pink-400 font-varela cursor-grabbing mr-4" onClick={() => scrollToSection("skills")}>
                    Skills
                </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 text-2xl hover:text-pink-400 mr-4 font-varela cursor-grabbing">
                <i class="fas fa-code fa-xs"></i> Portfolio <i class="fas fa-code fa-xs"></i>
                </a>
                <a href="javascript:void(0)" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 text-lg hover:text-pink-400 mr-4 font-varela cursor-grabbing" onClick={() => scrollToSection("education")}>
                    Education
                </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 text-lg hover:text-pink-400 mr-4 font-varela cursor-grabbing" onClick={() => scrollToSection("experiences")}>
                    Experiences
                </a>
                </div>
            </div> 
        </nav>
    )
}

export default Header;