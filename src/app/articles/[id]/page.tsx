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

    const steps = [
        {
            title: "作りたいけど知識がない…",
            heading: "設計書、専門知識不要",
            subheading: "ざっくりした相談でもOK",
            description:
                "相談してもエンジニアだと技術的な話ばかりでよく分からない。営業だとお決まりな話しかできない。ロックシステムでは、『営業』も『エンジニア』も経験している『話せるエンジニア』が開発のお悩みから運用のことまでご要望をしっかりとヒアリングいたします。",
        },
        {
            title: "コストと時間が心配…",
            heading: "最短1か月/50万円～",
            subheading: "納期、コストに合わせて提案！",
            description:
                "最初から大きくコストをかけたくないというお客様には、必要な機能のみに絞りスモールスタートすることをオススメしております。まずは一つから改善のサイクルを起こし、徐々に大きなDXへと変革を起こします。",
        },
        {
            title: "どこに頼むのがいいのか…",
            heading: "開発から運用までおまかせ",
            subheading: "ヒアリング、提案は無料！",
            description:
                "依頼の負担も最小に。お客様にしていただくことは打ち合わせ、データなどのご提供、確認のみ。当社では社外であるお客様の仕事をクライアントにすることを一番に考え、最大で効率的にするソフトウェア開発を提供しています。",
        },
    ];

    if (!article) return notFound();

    return (
        <>
            <Header />
            <p className='block pl-16 py-6 text-[#999]'>HOME &gt; <a href='../../'>ブログ</a> &gt; <span className='font-bold text-black'>{article.title}</span></p>
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
            {/* <div className='min-w-[1280px] mt-24'>
                <img src="/images/rock.png" alt="" className='' />
            </div> */}
            <div className="relative bg-blue-500 py-12 flex flex-col items-center text-center mt-48">
                <div className="absolute top-[-70px] bg-white px-8 py-8 shadow-lg inline-block text-pink-600 font-bold text-xl leading-tight w-[80%] border-4 border-black ">
                    <span>ロックシステムなら大丈夫です！<br />話せるエンジニアが相談にのります！</span>
                    <div className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white left-1/2 transform -translate-x-1/2 top-full"></div>
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-10">
                    <div className="flex flex-col items-center">
                        <img
                            src="https://user0514.cdnw.net/shared/img/thumb/cc0160160826_TP_V.jpg"
                            alt="PM/スクラムマスター"
                            width={120}
                            height={120}
                            className="rounded-full w-[120px] h-[120px] object-cover"
                        />
                        <div className='mt-2'>
                            <div className="bg-black text-white text-sm font-semibold px-4 py-2">PM/スクラムマスター</div>
                            <div className="bg-white text-black text-sm font-semibold px-4 py-2">プロジェクト全体のまとめ役</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://user0514.cdnw.net/shared/img/thumb/cc0160160007_TP_V.jpg"
                            alt="PL/サービスエンジニア"
                            width={120}
                            height={120}
                            className="rounded-full w-[120px] h-[120px] object-cover"
                        />
                        <div className='mt-2'>
                            <div className="bg-black text-white text-sm font-semibold px-4 py-2">PL/サービスエンジニア</div>
                            <div className="bg-white text-black text-sm font-semibold px-4 py-2">話せる専門家</div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-500 py-12 flex flex-col items-center text-white">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap md:flex-nowrap items-center justify-center gap-12 max-w-4xl mb-10"
                        >
                            <div className="w-48 h-48 flex items-center justify-center bg-black text-white font-bold text-lg p-4 text-center">
                                {step.title}
                            </div>
                            <div className="bg-white text-left text-black p-6 rounded-lg shadow-lg max-w-2xl relative">
                                <h3 className="text-lg font-bold text-gray-700">{step.heading}</h3>
                                <h2 className="text-xl font-bold text-black mt-1">{step.subheading}</h2>
                                <p className="text-gray-600 mt-3">{step.description}</p>
                                <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 border-r-[20px] border-r-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mb-6 mt-12 flex-wrap items-center p-6 max-w-3xl mx-auto ">
                <div className="flex-shrink-0">
                    <img
                        src="https://rocksystem.co.jp/assets/img/works/sss_img01.png"
                        alt="Smart SME Supporter Logo"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="ml-6 flex-1">
                    <h3 className="text-black font-bold text-lg">
                        経済産業省認定<br />
                        <span className="text-xl">情報処理支援機関<sup className="text-xs">(※)</sup> です。</span>
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                        ※中小企業の生産性を向上させたり、経営基盤強化のための使いやすいソフトウェアの開発やIT導入をサポートする認定機関（第14号-21060181）
                    </p>
                </div>
            </div>
            <div className="mt-4 md:mt-0 mx-auto w-fit mb-12">
                <a href='https://rocksystem.co.jp/contact/' className="bg-pink-500 hover:bg-pink-600 px-24 text-white font-bold py-3 px-6 rounded-full flex items-center">
                    相談してみる
                    <span className="ml-2">➤</span>
                </a>
            </div>
            <Footer />
        </>
    );
}