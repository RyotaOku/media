export function Nav() {
    return (
        <>
            <h2 className="text-xl font-bold italic mb-4 border-l-4 border-gradient-to-r from-purple-400 to-blue-400 pl-2">
                CATEGORY
            </h2>

            {/* カテゴリ一覧 */}
            <ul className="space-y-4 text-lg">
                <li><a href="https://rocksystem.co.jp/blog/list.php?category_id=2">社員インタビュー</a></li>
                <li><a href="https://rocksystem.co.jp/blog/list.php?category_id=40">座談会 / クロストーク</a></li>
                <li><a href="">社員ブログ</a></li>
                <li><a href="https://rocksystem.co.jp/blog/list.php?category_id=34">広報室 - 月刊ロックシステム</a></li>
                <li><a href="https://rocksystem.co.jp/blog/list.php?category_id=39">YOUTUBE動画</a></li>
                <li><a href="https://rocksystem.co.jp/blog/list.php?category_id=35">技術研究ブログ</a></li>
                <li><a href="https://rocksystem.co.jp/blog/list.php?category_id=32">社長ブログ</a></li>
            </ul>
        </>
    )
}