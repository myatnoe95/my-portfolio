import React from 'react';

const Footer = () => {
    return(
        <section class="bg-section-color py-10">
            <div class="text-center pb-5 font-varela">Contact Me from</div>
            <div class="flex justify-center items-center">
                <a class="mr-7" href='https://www.facebook.com/myatnoe.kyiphyu.94'>
                    <i class="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
                </a>

                <a class="mr-7" href='https://www.instagram.com/phooandi'>
                    <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
                </a>

                <a class="mr-7" href='https://www.linkedin.com/in/myat-noe-kyi-phyu-9b2b92247/'>
                    <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                </a>
                
                <a class="mr-7" href='https://github.com/myatnoe95'>
                    <i class="fa fa-github-square fa-lg" aria-hidden="true"></i>
                </a>
            </div>
        </section>
        
    )
}

export default Footer;