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
      <header class ='fixed z-50 w-screen box-border backdrop-blur-3xl drop-shadow-2xl bg-white/50 px-8 py-5 flex justify-between items-center'>
        <img class='h-11 max-lg:h-7' src ={glamLogo}></img>
        <div class='flex mr-6 text'>
          <h1 class='mr-[30px] max-lg:mr-[5px] text-lg max-lg:text-base font-semibold'>Products</h1>
          <h1 class='text-lg max-lg:text-base'>About</h1>
        </div>
      </header>
      <body class ='py-16 flex-col items-center justify-center '>
        <div class='flex flex-wrap-reverse px-7 py-20 justify-center items-center bg-landing bg-cover'>
          <div class ='max-lg:w-[100%] max-lg:mt-14 w-[40%] mr-[80px] max-lg:mr-[0px] z-30'>
            <h1 class='max-lg:text-6xl text-white font-black text-7xl drop-shadow-2xl max-lg:leading-tight leading-tight'>✨ make custom <span class ='animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>ai generated </span> filters ✨</h1>
            <p class ='text-white font-medium text-lg leading-loose mt-3'>Making your content eye-catching and the one that stands out among the others’ content?  Check Glam app’s AI Magic that is a perfect tool for your photos and videos!</p>
            <div class = 'flex mt-12'>
              <a href='https://apps.apple.com/sa/app/glam-ai-art-video-generator/id1545593132' target='_blank'>
              <img src={appStore} class ='transform drop-shadow-2xl h-14 hover:scale-110 duration-300 hover:-rotate-6'></img> 
              </a>
              <a href = 'https://play.google.com/store/apps/details?id=app.getglam&hl=en_US&gl=US' target='_blank'>    
              <img src={googlePlay} class ='ml-6 transform drop-shadow-2xl h-14 hover:scale-110 duration-300 hover:rotate-6'></img>          
              </a>
            </div>
          </div>
          <div class ='max-lg:w-[100%] w-[45%] drop-shadow-glow'>
            <ImageCarousel></ImageCarousel>
          </div>
        </div>
        
        <div class='py-10 px-5 my-8 bg-white flex flex-wrap items-center justify-around max-lg:justify-start'>
          <h1 class='text-3xl font-black w-32 text-neutral-500 mr-10'>In <span class = 'text-5xl text-black whitespace-nowrap'> just one </span> year</h1>
          <div class ='flex flex-col flex-row items-start mx-3 max-lg:mx-0 max-lg:w-screen max-lg:mt-10'>
            <h1 class='text-7xl max-lg:text-8xl font-bold animate-text bg-gradient-to-r from-[#FF8FFA] via-[#FFCDB1] to-[#FFEB69] bg-clip-text text-transparent font-white'>500K+</h1>
            <h1 class='text-2xl font-bold mt-3 text-neutral-500 tracking-wide'>downloads</h1>
          </div>
          <div class ='flex flex-col flex-row items-start mx-1 max-lg:mx-0 max-lg:w-screen max-lg:mt-10'>
            <h1 class='text-7xl max-lg:text-8xl font-bold animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>30+</h1>
            <h1 class='text-2xl font-bold mt-3 text-neutral-500 tracking-wide'>employees</h1>
          </div>
          <div class ='flex flex-col flex-row items-start mx-1 max-lg:mx-0 max-lg:w-screen max-lg:mt-10'>
            <h1 class='text-7xl max-lg:text-8xl font-bold animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>top 10</h1>
            <h1 class='text-2xl font-bold mt-3 text-neutral-500 tracking-wide'>ranking</h1>
          </div>
        </div>

         <HowItWorks></HowItWorks>
      
      </body>
    </div>
  );
}

export default App;
