type ArticleProps = {
    imageSrc: string;
    title: string;
    author: string;
    authorImage: string;
    date: string;
};

export default function ArticleCard({ imageSrc, title, author, authorImage, date }: ArticleProps) {
    return (
        <div className="flex items-center space-x-6 p-4 h-96 border-b hover:shadow-md rounded pt-8">
            {/* 記事サムネイル */}
            <div className="w-[400px] h-full flex-shrink-0 overflow-hidden rounded-lg">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* 記事情報 */}
            <div className="flex flex-col h-full pt-12">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <div className="flex items-center mt-2 text-gray-500 text-sm">
                    <img src={authorImage} alt={author} width={24} height={24} className="rounded-full" />
                    <span className="ml-2">{author}</span>
                    <span className="ml-4">{date}</span>
                </div>
            </div>
        </div>
    );
}