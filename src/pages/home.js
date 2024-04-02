import appStore from '../images/appstore.svg'
import googlePlay from '../images/googleplay.svg'
import ImageCarousel from '../components/imageCarousel'
import HowItWorks from '../pages/howitworks'
import Stats from '../components/stats'

export default function Landing() {
    return (<body id='product' class='flex-col items-center justify-center overflow-hidden bg-cover bg-landing'>
        <div class='flex flex-wrap-reverse px-7 pt-20 min-h-[100vh] justify-center items-center max-lg:text-center'>
            <div class='max-lg:w-[100%] max-lg:mt-10 w-[40%] mr-[80px] max-lg:mr-[0px] z-30'>
                <h1 class='max-sm:text-left max-lg:text-4xl text-white font-black text-6xl drop-shadow-2xl max-lg:leading-tight leading-tight'>✨ Make custom <span class='animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>ai generated </span> filters ✨</h1>
                <p class='max-sm:text-left max-sm:text-base max-lg:text-md text-white font-medium text-lg leading-loose mt-3 opacity-75'>Making your content eye-catching and the one that stands out among the others’ content?  Check Glam app’s AI Magic that is a perfect tool for your photos and videos!</p>
                <div class='flex mt-12 max-lg:justify-center max-sm:mt-10'>
                    <a href='https://apps.apple.com/sa/app/glam-ai-art-video-generator/id1545593132' target='_blank' className='mb-4'>
                        <img src={appStore} className='transform drop-shadow-2xl max-md:h-11 h-14 hover:scale-110 duration-300 hover:-rotate-6'></img>
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=app.getglam&hl=en_US&gl=US' target='_blank'>
                        <img src={googlePlay} className='ml-10 max-sm:ml-7 transform drop-shadow-2xl max-md:h-11 h-14 hover:scale-110 duration-300 hover:rotate-6'></img>
                    </a>
                </div>
            </div>
            <div class='max-lg:w-[100%] w-[45%]'>
                <ImageCarousel></ImageCarousel>
            </div>
        </div>
        <HowItWorks></HowItWorks>

        <div id='enterprise' class='pb-28 flex flex-col items-center'>
            <div className='flex-wrap relative bg-cover flex items-center justify-around w-[90%]'>
                <div className='box-border max-md:w-[100%] max-lg:px-5 max-lg:pb-0 py-12 px-4 rounded-3xl w-[100%] max-md:mb-0 flex-wrap'>
                    <h1 className='max-lg:text-6xl max-lg:mt-0 text-7xl font-black bg-clip-text text-white '>Let's <span class='animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>partner</span></h1>
                    <p className='max-md:text-sm max-lg:mb-10 mt-7 text-xl text-white leading-10 opacity-75'>Our team at Glam is pushing the boundaries as to what is possible in the world of artifical intelligence.  If you'd like to partner with us, we're open to it!  No deal is too big or too small, so feel free to reach out.</p>
                </div>
                <Stats></Stats>
                <div className='w-[100%] mt-14'>
                    <a href="mailto:contact@glamlabs.app"><button className='bg-white border-[1px] px-16 py-3 text-gray-600 rounded-lg text-lg font-semibold'>Contact Us</button></a>
                </div>
            </div>
        </div>
    </body>)
}