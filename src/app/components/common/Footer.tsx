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
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start max-w-screen-lg px-4 md:px-8'>
                <div className='flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0'>
                    <p className='font-bold text-4xl font-sans mb-4'>ロックシステム</p>
                    <address className='not-italic'>
                        <p className='mb-8'>〒553-0003 大阪府大阪市福島区福島5丁目1-12</p>
                    </address>
                </div>

                <div className='flex flex-col md:flex-row justify-center md:justify-between w-full md:w-6/12 text-center md:text-left mb-8 md:mb-0'>
                    <div className='w-full md:w-5/12'>
                        <span className='w-12 border border-white border-b block mb-1 mx-auto md:mx-0'></span>
                        <h3 className='text-2xl font-sans font-bold uppercase mb-6'>Sitemap</h3>
                        <ul>
                            <li className='mb-4'><Link href='/' className='text-zinc-400 hover:text-zinc-200'>トップ</Link></li>
                            <li className='mb-4'><Link href='/reports' className='text-zinc-400 hover:text-zinc-200'>活動報告</Link></li>
                        </ul>
                    </div>

                    <div className='w-72 md:w-7/12 mx-auto md:mx-0'>
                        <span className='w-12 border border-white border-b block mb-1 mx-auto md:mx-0'></span>
                        <h3 className='text-2xl font-sans font-bold uppercase mb-6'>Entry</h3>
                        <div className='mb-8'>
                            <p className='mb-1'>エントリーご希望の方</p>
                            <Link
                                href='#'
                                className='py-4 font-bold text-center whitespace-nowrap bg-orange-500 text-white py-2 px-6 block hover:bg-orange-600 transition mx-auto md:mx-0'
                            >
                                エントリー希望
                            </Link>
                        </div>
                        <div>
                            <p className='mb-1'>その他のお問い合わせ</p>
                            <Link
                                href='#'
                                className='py-4 font-bold text-center whitespace-nowrap bg-red-700 text-white py-2 px-6 block hover:bg-red-800 transition mx-auto md:mx-0'
                            >
                                お問い合わせ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-screen-lg mt-8 text-center md:text-left text-zinc-600 text-sm mx-auto px-4 md:px-8'>
                <p>Copyright (c) </p>
            </div>
        </footer>
    )
}