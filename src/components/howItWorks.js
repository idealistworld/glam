// HowItWorks.jsx

import React, { useState } from 'react';
import firstStep from '../images/steps/stepone.svg';
import secondStep from '../images/steps/steptwo.svg';
import thirdStep from '../images/steps/stepthree.svg';
import './HowItWorks.css'; // Import the CSS file for styling

function HowItWorks(props) {
  // Initialize state for the step
  const [step, setStep] = useState(1);

  // Use a ternary operator to set different paragraph values for each step
  const paragraphText =
    step === 1
      ? 'To get started with Glam all you need to do is upload a photo or video.  Select one from your camera roll.'
      : step === 2
      ? "Pick one of Glam's original filters to apply to your photo or video.  Your video will be ready in just seconds."
      : 'Enjoy your new content! Post your AI-powered photo or video on platforms such as TikTok or Instagram!';

  const stepPhoto =
    step === 1
      ? firstStep
      : step === 2
      ? secondStep
      : thirdStep;

  // Function to handle next step
  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  // Function to handle previous step
  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className='max-lg:flex-wrap-reverse max-lg:h-[100%] max-lg:mx-0 relative bg-effect bg-cover rounded-3xl mx-10 px-16 flex items-center justify-center absolute h-[500px]'>
      <div className='max-lg:mt-6 box-border max-lg:w-[100%] backdrop-blur-3xl drop-shadow-2xl bg-black/60 drop-shadow-2xl py-12 px-8 rounded-3xl w-[40%]'>
        <h1 className='text-5xl font-black animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>How it Works</h1>
        <h1 className='text-3xl font-bold my-8 max-lg:my-4 text-white'>{`Step ${step}`}</h1>

        <p className='mt-3 text-neutral-300'>{paragraphText}</p>

        <div className='mt-5 max-lg:mt-5 w-[120%] flex items-center justify-satrt'>
          <button onClick={prevStep} className='max-lg:text-sm accent-white rounded-lg cursor-pointer bg-white px-12 py-2 max-lg:px-6'>
            Back
          </button>
          <button onClick={nextStep} className='max-lg:text-sm accent-white ml-10 rounded-lg cursor-pointer bg-white px-12 py-2 max-lg:px-6'>
            Next
          </button>
        </div>
      </div>

      <img
        src={stepPhoto}
        alt="Description of the image"
        className='max-lg:ml-[0px] max-lg:w-[120%] ml-[100px] rounded-3xl drop-shadow-3xl'
      />
    </div>
  );
}

export default HowItWorks;
