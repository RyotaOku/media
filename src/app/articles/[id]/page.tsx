import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/common/Header'
import { Nav } from '@/app/components/common/Nav';
import Footer from '@/app/components/common/Footer';

type Article = {
    title: string;
    content: string;
    eyecatch?: { url: string };
    publishedAt?: string;
    author?: string;
    authorImage?: { url: string };
};

async function getArticle(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT}/${id}`, {
        headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY! },
    });

    if (!res.ok) return null;

    return res.json();
}

export default async function ArticleDetail({ params }: { params: { id: string } }) {
    const article = await getArticle(params.id);

    if (!article) return notFound();

    return (
        <>
            <Header />
            <p className='block pl-16 py-6 text-[#999]'>HOME &gt; <a href=''>ブログ</a> &gt; <span className='font-bold text-black'>{article.title}</span></p>
            <h2 className='max-w-7xl text-right text-4xl font-bold mx-auto'>BLOG</h2>

            <div className='flex flex-wrap justify-between pt-12'>
                <div className="max-w-4xl mx-auto p-4  w-[75%]">
                    <h1 className="text-4xl font-bold pb-4 border-b">{article.title}</h1>
                    {article.eyecatch?.url && (
                        <div className="my-4">
                            <Image src={article.eyecatch.url} alt={article.title} width={800} height={450} className="rounded-lg" />
                        </div>
                    )}
                    <div className="text-gray-500 mb-4">
                        {article.publishedAt && <p>{new Date(article.publishedAt).toLocaleDateString()}</p>}
                        {article.author && (
                            <div className="flex items-center mt-2">
                                <Image src={article.authorImage?.url || '/default-avatar.jpg'} alt={article.author} width={32} height={32} className="rounded-full" />
                                <span className="ml-2">{article.author}</span>
                            </div>
                        )}
                    </div>
                    {/* <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: decodeURIComponent(article.content.html || article.content) }} /> */}
                    <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: article.content.html || article.content }} />
                </div>
                <div className="p-4 w-[25%]">
                    <Nav />
                </div>
            </div>
            <div className='min-w-[1280px] mt-24'>
                <img src="/images/rock.png" alt="" className='' />
            </div>
            <div className='min-w-[1280px] mb-24'>
                <img src="/images/soudan.png" alt="" className='' />
            </div>
            <Footer />
        </>
    );
}