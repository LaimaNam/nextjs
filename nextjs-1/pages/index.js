import { server } from '../config';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <h1>Welcome to Nextjs</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(`${server}/api/articles`);
  const articles = await data.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const data = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await data.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };