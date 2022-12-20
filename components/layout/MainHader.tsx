import Link from "next/link";

const MainHader = () => {
    return (
        <header className='bg-gray-50 justify-center justify-center flex gap-20 py-4'>
                <div className=' font-semibold text-2xl rounded-xl px-3 py-1 border-2 border-blue-300 '>
                    <Link href={'/'}>Logo</Link>
                </div>
                <nav>
                    <ul>
                        <li className=' font-semibold text-2xl rounded-xl px-3 py-1 border-2 border-blue-300'>
                            <Link href={'/events'}>All Events</Link>
                        </li>
                    </ul>
                </nav>

        </header>
    );
};

export default MainHader;