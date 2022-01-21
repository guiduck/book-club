import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import BookList from '../src/components/BookList';

const Home: React.FC = () => {
  return (
    <Flex width='100vw' >
      <Head>
        <title>Home</title>
      </Head>

      <BookList />
    </Flex>
  )
}

export default Home;