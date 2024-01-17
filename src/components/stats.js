export default function Stats() {
    return (<div class='w-[100%] gap-[30px] p-12 max-sm:px-10 my-4 backdrop-blur bg-white/10 border-[1px] px-12 border-white rounded-xl flex flex-wrap justify-between max-md:justify-start'>
        <h1 class='text-3xl font-bold text-white max-sm:mx-0'>In just one year, <br></br> we've accomplished:</h1>
        <div class='flex flex-col flex-row items-start max-md:mx-2 max-sm:mx-0 max-sm:w-screen max-sm:mt-4'>
            <h1 class='text-6xl max-sm:text-6xl max-lg:text-5xl font-bold animate-text bg-gradient-to-r from-[#FF8FFA] via-[#FFCDB1] to-[#FFEB69] bg-clip-text text-transparent font-white'>500K+</h1>
            <h1 class='text-2xl font-bold mt-3 text-white tracking-wide opacity-75'>downloads</h1>
        </div>
        <div class='flex flex-col flex-row items-start max-md:mx-2 max-sm:mx-0 max-sm:w-screen max-sm:mt-4'>
            <h1 class='text-6xl max-sm:text-6xl max-lg:text-5xl font-bold animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>$250k</h1>
            <h1 class='text-2xl font-bold mt-3 text-white tracking-wide'>MRR</h1>
        </div>
        <div class='flex flex-col flex-row items-start max-md:mx-2 max-sm:mx-0 max-sm:w-screen max-sm:mt-4'>
            <h1 class='text-6xl max-sm:text-6xl max-lg:text-5xl font-bold animate-text bg-gradient-to-r from-[#FFEB69] via-[#FFA2A9] to-[#FFEB69] bg-clip-text text-transparent font-white'>Top 10</h1>
            <h1 class='text-2xl font-bold mt-3 text-white tracking-wide'>ranking</h1>
        </div>
    </div>);
}