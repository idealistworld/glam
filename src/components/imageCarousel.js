import leftImage from '../images/leftImage.webp';
import middleImage from '../images/middleImage.webp';
import rightImage from '../images/rightImage.webp';
import './imageCard.css';

function ImageCarousel() {
  return (
    <div className="flex justify-center items-center">
    <img
      src={leftImage}
      className="w-[170px] max-lg:w-[90px] h-auto -rotate-12 rounded-3xl hover:scale-110 duration-300"
    ></img>
    <img
      src={middleImage}
      className="w-[230px] max-lg:w-[140px] z-50 h-auto rounded-3xl hover:scale-110 duration-300"
    ></img>
    <img
      src={rightImage}
      className="w-[170px] max-lg:w-[90px] h-auto rotate-6 rounded-3xl hover:scale-110 duration-300"
    ></img>
  </div>
  
  );
}

export default ImageCarousel;
