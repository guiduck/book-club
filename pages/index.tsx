import Head from 'next/head';
import React from 'react';
import BookList from '../src/components/BookList';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <BookList />
    </div>
  )
}

export default Home;