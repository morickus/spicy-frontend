import AppLayout from '@/layouts/AppLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

type PageProps = {};

function App({ Component, pageProps }: AppProps<PageProps>) {
  // @ts-ignore
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
      </Head>
      <Provider store={store}>
        <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
      </Provider>
    </>
  );
}

export default App;