export default function Header() {
    return (
        <header className="flex justify-end relative items-center px-8 py-4 border-b">
            <div className='absolute left-8'>
                <a href="https://rocksystem.co.jp/"><img src="https://rocksystem.co.jp/assets/img/common/ht_logo.svg" alt="Rock System Academy Logo" width="140" height="40" /></a>
            </div>

            <nav className="flex space-x-8 text-sm font-semibold">
                <a href="https://rocksystem.co.jp/philosophy/" className="block text-center hover:text-gray-500">ABOUT US<br /><span className="text-xs text-gray-600">会社概要</span></a>
                <a href="https://rocksystem.co.jp/works/" className="block text-center hover:text-gray-500">WORKS<br /><span className="text-xs text-gray-600">開発実績</span></a>
                <a href="https://rocksystem.co.jp/event/" className="block text-center hover:text-gray-500">EVENT<br /><span className="text-xs text-gray-600">イベント</span></a>
                <a href="https://rocksystem.co.jp/recruit/" className="block text-center hover:text-gray-500">RECRUIT<br /><span className="text-xs text-gray-600">採用情報</span></a>
                <a href="https://rocksystem.co.jp/blog/pickup.php" className="block text-center hover:text-gray-500">BLOG<br /><span className="text-xs text-gray-600">ブログ</span></a>
                <a href="https://rocksystem.co.jp/contact/" className="block text-center hover:text-gray-500">CONTACT<br /><span className="text-xs text-gray-600">お問合わせ</span></a>
            </nav>

            <div className='pl-12'>
                <img src="https://rocksystem.co.jp/assets/img/common/ht_logo02.png" alt="Rock System Academy Logo" width="140" height="40" />
            </div>
        </header>
    )
}