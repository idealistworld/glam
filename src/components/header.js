import glamLogo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isRootPath = location.pathname === '/';

    return (
        <header className={`absolute z-50 w-full box-border bg-cover px-8 py-6 max-lg:py-5 max-lg:px-3 flex justify-between items-center p-0`}>
            <Link to='/'>
                <img className='h-10 max-lg:h-7 max-sm:ml-1' src={glamLogo} alt='Glam Logo'></img>
            </Link>
            <div className='flex mr-6 max-sm:mr-3'>
                <Link to='/howitworks'>
                    <h1 className='mr-[30px] max-lg:mr-[15px] text-base max-lg:text-sm text-[#FFFFFF] font-medium hover:scale-110 duration-200'>How it Works</h1>
                </Link>
                <Link to='/enterprise'>
                    <h1 className='text-base max-lg:text-sm text-[#FFFFFF] font-medium hover:scale-110 duration-200'>Enterprise</h1>
                </Link>
            </div>
        </header>
    );
}
