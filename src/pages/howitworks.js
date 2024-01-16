import '../components/HowItWorks.css';


export default function asdf() {
    return (<div class='bg-cover max-lg:py-16 py-28 min-h-[100vh] bg-landing flex flex-col items-center'>
        <div className='flex-wrap relative bg-cover flex items-center justify-around w-[85%]'>

            <div className='box-border max-md:w-[100%] max-lg:px-5 max-lg:pb-0 py-12 px-4 rounded-3xl w-[100%] max-md:mb-0 flex-wrap'>
                <h1 className='max-lg:text-6xl max-lg:mt-0 text-7xl font-black bg-clip-text text-white '>How <span class='animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>Glam App</span> works</h1>
                <p className='max-md:text-sm max-lg:mb-10 mt-7 text-xl text-white leading-10 opacity-75'>Glam is super easy to get started with. All you need is the Glam app and content and in a few minutes, you'll have finished content. Our goal is to democratize content creation and allow anyone to have access to the tools that professional influencers use.</p>
            </div>

            <div className='backdrop-blur bg-white/20 border-[1px] px-12 py-6 border-white rounded-xl flex justify-between flex-wrap'>

                <div className='max-md:mt-6 box-border max-md:w-[95%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>1. Upload content</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>To get started with Glam all you need to do is upload a photo or video. Select one from your camera roll.</p>
                </div>

                <div className='max-md:mt-6 box-border max-md:w-[95%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>2. Pick an effect</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>Pick one of Glam's original filters to apply to your photo or video. Your video will be ready in just seconds.</p>
                </div>

                <div className='max-md:mt-6 box-border max-md:w-[95%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>3. Use Glam magic</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>With just the press of a single button, add Glam's AI magic to your video in just 30 seconds.</p>
                </div>


                <div className='max-md:mt-6 box-border max-md:w-[95%] max-lg:px-5 max-lg:py-3 py-6 px-8 rounded-3xl w-[40%]  max-md:mb-0 line-shadow animated-gradient hover:scale-110 duration-300'>
                    <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-black bg-clip-text animate-text text-white'>4. Share the result</h1>
                    <p className='max-lg:text-sm mt-5 text-md text-white leading-8 opacity-75'>Enjoy your new content! Post your AI-powered photo or video on platforms such as TikTok or Instagram!</p>
                </div>

            </div>

        </div>
    </div>)
}