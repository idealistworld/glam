import '../components/HowItWorks.css';

import { useEffect } from 'react';

export default function HowItWorks() {

    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup function to remove script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (<div id = 'howitworks' class='pb-20 flex flex-col items-center'>
        <div className='flex-wrap relative bg-cover flex items-center justify-around w-[90%]'>

            <div className='box-border max-md:w-[100%] max-lg:px-5 max-lg:pb-0 py-12 px-4 rounded-3xl w-[100%] max-md:mb-0 flex-wrap'>
                <h1 className='max-lg:text-6xl max-lg:mt-0 text-7xl font-black bg-clip-text text-white '>Glam <span class='animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'> how it works</span></h1>
                <p className='max-md:text-sm max-lg:mb-10 mt-7 text-xl text-white leading-10 opacity-75'>Glam is super easy to get started with. All you need is the Glam app and content and in a few minutes, you'll have finished content. Our goal is to democratize content creation and allow anyone to have access to the tools that professional influencers use.</p>
            </div>

            <div className='backdrop-blur bg-white/10 border-[1px] px-12 py-6 border-white rounded-xl flex justify-between flex-wrap'>

                <div className='max-md:mt-6 box-border max-md:w-[100%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>1. Upload content</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>To get started with Glam all you need to do is upload a photo or video. Select one from your camera roll.</p>
                </div>

                <div className='max-md:mt-6 box-border max-md:w-[100%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>2. Pick an effect</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>Pick one of Glam's original filters to apply to your photo or video. Your video will be ready in just seconds.</p>
                </div>

                <div className='max-md:mt-6 box-border max-md:w-[100%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>3. Use Glam magic</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>With just the press of a single button, add Glam's AI magic to your video in just 30 seconds.</p>
                </div>


                <div className='max-md:mt-6 box-border max-md:w-[100%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>4. Share the result</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>Enjoy your new content! Post your AI-powered photo or video on platforms such as TikTok or Instagram!</p>
                </div>
            </div>

            <div className='mt-8 box-border max-md:w-[100%] max-lg:px-5 max-lg:pb-0 py-12 px-4 rounded-3xl w-[100%] max-md:mb-0 flex-wrap'>
                <h1 className='max-lg:text-6xl max-lg:mt-0 text-7xl font-black bg-clip-text text-white '>Need <span class='animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'> ideas?</span></h1>
                <p className='max-md:text-sm max-lg:mb-10 mt-7 text-xl text-white leading-10 opacity-75'>Our team of content specialists have created some of social media's trendiest filters. If you're looking for inspiration when it comes to creating your next piece of content, look no further.  Check out of some Glam's premiere filters below.</p>
            </div>
            <div class='px-4 flex gap-[30px] w-[100%] flex-wrap'>
                <a href='https://www.tiktok.com/search?q=glam%20app&t=1705451969776' target='_blank'>
                    <div class='backdrop-blur bg-white/10 border-[1px] px-12 py-2 rounded-xl hover:scale-110 duration-300'>
                        <p className='max-lg:text-sm font-black text-white leading-8'>TikTok</p>
                    </div>
                </a>

                <a href='https://www.instagram.com/glam_app/' target='_blank'>
                    <div class='backdrop-blur bg-white/10 border-[1px] px-12 py-2 rounded-xl hover:scale-110 duration-300'>
                        <p className='max-lg:text-sm font-black text-white leading-8'>Instagram</p>
                    </div>
                </a>

                <a href='https://apps.apple.com/md/app/glam-ai-art-video-generator/id1545593132' target='_blank'>
                    <div class='backdrop-blur bg-white/10 border-[1px] px-12 py-2 rounded-xl hover:scale-110 duration-300'>
                        <p className='max-lg:text-sm font-black text-white leading-8'>View in App</p>
                    </div>
                </a>
            </div>
        </div>
    </div >)
}

