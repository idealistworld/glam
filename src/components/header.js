import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import glamLogo from '../images/logo.png';

export default function Header() {
    const location = useLocation();
    const isRootPath = location.pathname === '/';

    // Custom click handler for scrolling
    const handleScroll = (id) => (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Scroll to the specific id
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`absolute z-50 w-full box-border bg-cover px-12 py-8 max-lg:py-5 max-lg:px-3 flex justify-between items-center p-0`}>
            <Link to='/'>
                <img className='h-10 max-lg:h-7 max-sm:ml-1' src={glamLogo} alt='Glam Logo'></img>
            </Link>
            <div className='flex mr-6 max-sm:mr-3'>
                {/* Updated Link components to use onClick for scrolling */}
                {/* Use <a> instead of <Link> if you're only scrolling on the same page */}
                <a href='/#howitworks' onClick={handleScroll('howitworks')} className='text-xl mr-[30px] max-lg:mr-[15px] text-[#FFFFFF] font-medium hover:scale-110 duration-200 cursor-pointer'>
                    How it Works
                </a>
                <a href='/#enterprise' onClick={handleScroll('enterprise')} className='text-xl text-[#FFFFFF] font-medium hover:scale-110 duration-200 cursor-pointer'>
                    Enterprise
                </a>
            </div>
        </header>
    );
}
