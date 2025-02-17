'use client';

import Footer from './components/common/Footer';
import { useState, useEffect } from 'react'
import Header from './components/common/Header';
import Link from 'next/link';
import { Nav } from './components/common/Nav';
import ArticleCard from './components/ArticleCard';

type Article = {
  id: string;
  title: string;
  eyecatch?: { url: string };
  category?: string;
  publishedAt?: string;
  author?: string;
  authorImage?: { url: string };
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT!, {
          headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY! },
        });
        const data = await res.json();
        setArticles(data.contents);
      } catch (error) {
        console.error('記事データの取得に失敗しました:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Header />

      <div className='max-w-7xl mx-auto'>
        <a href="#" className='text-right text-gray block text-xs mt-8 mb-8'>HOME &gt; ブログ</a>
        <h2 className='text-right text-4xl font-bold'>BLOG</h2>

        <div className='flex flex-wrap justify-between pt-12 mb-24'>
          <div className="space-y-4 w-[75%] pr-12">
            <h2 className='text-2xl font-bold border-b border-black pb-2 pl-2'>社員ブログ</h2>
            {articles.length > 0 ? (
              articles.map((article) => (
                <Link key={article.id} href={`/articles/${article.id}`} passHref>
                  <ArticleCard
                    imageSrc={article.eyecatch?.url || '/default-thumbnail.jpg'}
                    title={article.title}
                    author={article.author || '未登録の著者'}
                    authorImage={article.authorImage?.url || '/default-avatar.jpg'}
                    date={article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : '日付未設定'}
                  />
                </Link>
              ))
            ) : (
              <p>記事を読み込んでいます...</p>
            )}
          </div>
          <div className="p-4 w-[25%]">
            <Nav />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}