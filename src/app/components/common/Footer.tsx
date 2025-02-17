import { Zen_Maru_Gothic } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';


const ZenMaruGothic = Zen_Maru_Gothic({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function Footer() {

    return (
        <footer className={`${ZenMaruGothic.className} bg-zinc-800 text-white pt-12 pb-4`}>

            <div className='max-w-screen-lg mt-8 text-center md:text-left text-zinc-600 text-sm mx-auto px-4 md:px-8'>
                <p>Copyright (c) </p>
            </div>
        </footer>
    )
}