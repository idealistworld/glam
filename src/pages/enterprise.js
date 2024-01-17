import Stats from '../components/stats'
import Offer from '../components/offer'

export default function Enterprise() {
    return (<div>
        <div class='bg-cover max-lg:py-16 py-28 min-h-[100vh] bg-landing flex flex-col items-center'>
            <div className='flex-wrap relative bg-cover flex items-center justify-around w-[90%]'>

                <div className='box-border max-md:w-[100%] max-lg:px-5 max-lg:pb-0 py-12 px-4 rounded-3xl w-[100%] max-md:mb-0 flex-wrap'>

                    <h1 className='max-lg:text-6xl max-lg:mt-0 text-7xl font-black bg-clip-text text-white '>Work with Glam</h1>
                    <p className='max-md:text-sm max-lg:mb-10 mt-7 text-xl text-white leading-10 opacity-75'>Our team at Glam is pushing the boundaries as to what is possible in the world of artifical intelligence.  If you'd like to partner with us, we're open to it!  No deal is too big or too small, so feel free to reach out.</p>
                </div>
              
                <Stats></Stats>
            </div>
        </div>
    </div>)
}