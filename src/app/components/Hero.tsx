import { Oswald } from 'next/font/google';

const oswald = Oswald({
    weight: '700',
    subsets: ['latin'],
});

export default function Hero() {
    return (
        <div className='relative h-screen w-full'>
            <video
                className='absolute inset-0 w-full h-full object-cover'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src='/videos/background.webm' type='video/webm' style={{ 'border': '' }} />
                このブラウザでは動画の再生がサポートされていません。
            </video>
            <div className='relative z-10 flex flex-col items-start border w-full justify-center h-full p-10 text-white max-w-screen-xl mx-auto'
                style={{ 'backgroundImage': `url("https://i.ytimg.com/vi_webp/czZOA-yzc2Y/maxresdefault.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
            </div>
        </div >
    )
}