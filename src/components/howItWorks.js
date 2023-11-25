import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className='flex-wrap relative bg-cover px-5 flex items-center justify-around w-[100%'>
      <div className='max-md:mt-6 box-border max-md:w-[100%] max-lg:px-5 max-lg:pb-0 py-8 px-4 rounded-3xl w-[40%] mb-8 max-md:mb-0 hover:scale-105 duration-300'>
        <h1 className='max-lg:text-4xl max-lg:mt-0 text-5xl font-bold bg-clip-text text-neutral-600'>How it works</h1>
        <p className='max-lg:text-sm mt-7 text-md text-neutral-400'>Glam is super easy to get started with. All you need is the Glam app and content and in a few minutes, you'll have finished content.</p>
      </div>

      <div className='max-md:mt-6 box-border max-md:w-[95%] max-lg:px-5 max-lg:py-3 py-8 px-8 rounded-3xl w-[40%] mb-8 max-md:mb-0 line-shadow animated-gradient hover:scale-105 duration-300'>
        <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-semibold bg-clip-text animate-text text-neutral-600'>1. Upload content</h1>
        <p className='max-lg:text-sm mt-5 text-md text-neutral-400'>To get started with Glam all you need to do is upload a photo or video. Select one from your camera roll.</p>
      </div>

      <div className='max-md:mt-6 box-border max-md:w-[95%] max-lg:px-5 max-lg:py-3 py-8 px-8 rounded-3xl w-[40%] mb-8 max-md:mb-0 line-shadow animated-gradient hover:scale-105 duration-300'>
      <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-semibold bg-clip-text animate-text text-neutral-600'>2. Pick an effect</h1>
        <p className='max-lg:text-sm mt-5 text-md text-neutral-400'>Pick one of Glam's original filters to apply to your photo or video. Your video will be ready in just seconds.</p>
      </div>

      <div className='max-md:mt-6 box-border max-md:w-[95%] max-lg:px-5 max-lg:py-3 py-8 px-8 rounded-3xl w-[40%] mb-8 max-md:mb-0 line-shadow animated-gradient hover:scale-105 duration-300'>
      <h1 className='max-lg:text-3xl max-lg:mt-0 text-3xl font-semibold bg-clip-text animate-text text-neutral-600'>3. Share the result</h1>
        <p className='max-lg:text-sm mt-5 text-md text-neutral-400'>Enjoy your new content! Post your AI-powered photo or video on platforms such as TikTok or Instagram!</p>
      </div>
    </div>
  );
}

export default HowItWorks;
