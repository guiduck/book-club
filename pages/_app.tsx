import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../src/components/Layout';
import { BookProvider } from '../src/context/BookContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <ChakraProvider>
      <BookProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BookProvider>
    </ChakraProvider>
  );
}

export default MyApp