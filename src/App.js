import './App.css';
import glamLogo from './images/logo.svg'
import whiteLogo from './images/logo_white.svg'
import appStore from './images/appstore.svg'
import googlePlay from './images/googleplay.svg'
import ImageCarousel from './components/imageCarousel'
import HowItWorks from './components/howItWorks'

function App() {
  return (
    <div>
      <header class='fixed z-50 w-screen box-border backdrop-blur-3xl drop-shadow-2xl bg-white/50 px-8 py-4 max-lg:py-5 max-lg:px-3 flex justify-between items-center'>
        <img class='h-10 max-lg:h-7' src={glamLogo}></img>
        <div class='flex mr-6 text'>
          <a href='#product'>
            <h1 class='mr-[30px] max-lg:mr-[15px] text-base max-lg:text-sm'>Product</h1>
          </a>
          <a href='#how-it-works'>
            <h1 class='text-base max-lg:text-sm'>How it Works</h1>
          </a>
        </div>
      </header>
      <body id='product' class='py-14 flex-col items-center justify-center'>
        <div class='flex flex-wrap-reverse px-7 py-20 justify-center items-center bg-landing bg-cover max-lg:text-center'>
          <div class='max-lg:w-[100%] max-lg:mt-14 w-[40%] mr-[80px] max-lg:mr-[0px] z-30'>
            <h1 class='max-sm:text-left max-lg:text-5xl text-white font-black text-6xl drop-shadow-2xl max-lg:leading-tight leading-tight'>✨ make custom <span class='animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>ai generated </span> filters ✨</h1>
            <p class='max-sm:text-left max-lg:text-md text-white font-medium text-lg leading-loose mt-3'>Making your content eye-catching and the one that stands out among the others’ content?  Check Glam app’s AI Magic that is a perfect tool for your photos and videos!</p>
            <div class='flex mt-12 max-lg:justify-center'>
              <a href='https://apps.apple.com/sa/app/glam-ai-art-video-generator/id1545593132' target='_blank' className='mb-4'>
                <img src={appStore} className='transform drop-shadow-2xl h-14 hover:scale-110 duration-300 hover:-rotate-6'></img>
              </a>
              <a href='https://play.google.com/store/apps/details?id=app.getglam&hl=en_US&gl=US' target='_blank'>
                <img src={googlePlay} className='transform drop-shadow-2xl h-14 hover:scale-110 duration-300 hover:rotate-6'></img>
              </a>
            </div>
          </div>
          <div class='max-lg:w-[100%] w-[45%] drop-shadow-glow'>
            <ImageCarousel></ImageCarousel>
          </div>
        </div>

        <div class='py-10 px-5 my-8 bg-white flex flex-wrap items-center justify-around max-md:justify-start max-lg:py-0'>
          <h1 class='text-3xl font-bold w-32 text-neutral-500 mr-10 max-sm:mx-0'>In <span class='text-4xl text-black whitespace-nowrap'> just one </span> year</h1>
          <div class='flex flex-col flex-row items-start max-sm:mx-0 max-sm:w-screen max-sm:mt-10'>
            <h1 class='text-6xl max-sm:text-7xl max-lg:text-5xl font-bold animate-text bg-gradient-to-r from-[#FF8FFA] via-[#FFCDB1] to-[#FFEB69] bg-clip-text text-transparent font-white'>500K+</h1>
            <h1 class='text-2xl font-bold mt-3 text-neutral-500 tracking-wide'>downloads</h1>
          </div>
          <div class='flex flex-col flex-row items-start max-sm:mx-0 max-sm:w-screen max-sm:mt-10'>
            <h1 class='text-6xl max-sm:text-7xl max-lg:text-5xl font-bold animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>$155k</h1>
            <h1 class='text-2xl font-bold mt-3 text-neutral-500 tracking-wide'>MRR</h1>
          </div>
          <div class='flex flex-col flex-row items-start max-sm:mx-0 max-sm:w-screen max-sm:mt-10'>
            <h1 class='text-6xl max-sm:text-7xl max-lg:text-5xl font-bold animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>top 10</h1>
            <h1 class='text-2xl font-bold mt-3 text-neutral-500 tracking-wide'>ranking</h1>
          </div>
        </div>

        <HowItWorks></HowItWorks>
      </body>
      <footer id='how-it-works' class='flex justify-between pt-[20px] pb-[35px] max-lg:px-8 px-12'>
        <h1>Contact: <span class='font-semibold'>paul@neiro.ai</span></h1>
        <a href='https://www.linkedin.com/company/mlventures-ai/' target='_blank'>
          <h1>LinkedIn</h1>
        </a>

      </footer>
    </div>
  );
}

export default App;
