'use client';

import Footer from './components/common/Footer';
import { useState } from 'react'
import { Zen_Maru_Gothic } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const ZenMaruGothic = Zen_Maru_Gothic({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

type Report = {
  id: string;
  title: string;
  date: string
};

export default function Home() {
  const [reports, setReports] = useState<Report[]>([]);

  return (
    <>
      <header className="flex justify-end relative items-center px-8 py-4 border-b">
        {/* Left Logo */}
        <div className='absolute left-8'>
          <img src="https://rocksystem.co.jp/assets/img/common/ht_logo.svg" alt="Rock System Academy Logo" width="140" height="40" />
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-8 text-sm font-semibold">
          <a href="/about" className="block text-center hover:text-gray-500">ABOUT US<br /><span className="text-xs text-gray-600">会社概要</span></a>
          <a href="/works" className="block text-center hover:text-gray-500">WORKS<br /><span className="text-xs text-gray-600">開発実績</span></a>
          <a href="/events" className="block text-center hover:text-gray-500">EVENT<br /><span className="text-xs text-gray-600">イベント</span></a>
          <a href="/recruit" className="block text-center hover:text-gray-500">RECRUIT<br /><span className="text-xs text-gray-600">採用情報</span></a>
          <a href="/blog" className="block text-center hover:text-gray-500">BLOG<br /><span className="text-xs text-gray-600">ブログ</span></a>
          <a href="/contact" className="block text-center hover:text-gray-500">CONTACT<br /><span className="text-xs text-gray-600">お問合わせ</span></a>
        </nav>

        {/* Right Logo */}
        <div className='pl-12'>
          <img src="https://rocksystem.co.jp/assets/img/common/ht_logo02.png" alt="Rock System Academy Logo" width="140" height="40" />
        </div>
      </header>

      <div className='max-w-7xl mx-auto'>
        <a href="#" className='text-right text-gray block text-xs mt-8 mb-8'>HOME &gt; ブログ</a>
        <h2 className='text-right text-4xl font-bold'>BLOG</h2>

        <div className='flex flex-wrap justify-between border'>
          <div className='w-[60%]'>

          </div>
          <div className="p-4 pl-24 w-[40%]">
            {/* タイトル */}
            <h2 className="text-xl font-bold italic mb-4 border-l-4 border-gradient-to-r from-purple-400 to-blue-400 pl-2">
              CATEGORY
            </h2>

            {/* カテゴリ一覧 */}
            <ul className="space-y-2 text-lg">
              <li>社員インタビュー</li>
              <li>座談会 / クロストーク</li>
              <li>社員ブログ</li>
              <li>広報室 - 月刊ロックシステム</li>
              <li>YOUTUBE動画</li>
              <li>技術研究ブログ</li>
              <li>社長ブログ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <section className={`${ZenMaruGothic.className} bg-zinc-800 pt-16 pb-12`}>
        <div className='mx-auto text-center'>
          <h2 className='font-sans text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12'>
            MEETING-REPORT
          </h2>
          <div className='py-4 bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl py-8 px-12 mx-auto'>
              {reports.map((report, index) => (
                <Link href={`/reports/detail?contentId=${report.id}`} key={index}>
                  <div key={index} className='p-4 text-white h-fit border border-white border-opacity-40'>
                    <h3 className='text-xl font-bold text-left my-4'>
                      {report.title}
                    </h3>
                    <p className='mt-4 text-right'>{new Date(report.date).toLocaleDateString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link href='/reports' className='inline-block px-10 py-4 mt-12 text-lg border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-800 transition'>
            活動報告をさらに見る
          </Link>
        </div>
      </section> */}


      <Footer />
    </>
  );
}
