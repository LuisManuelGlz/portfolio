import React, { ReactNode } from 'react';
import { Router } from 'next/router';
import Head from 'next/head';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import useTranslation from '../hooks/useTranslation';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: ReactNode;
  router: Router;
};

const main = ({ children, router }: Props) => {
  const { t } = useTranslation();

  return (
    <Box
      as="main"
      boxShadow={useColorModeValue('none', 'inset 0 0 150px black')}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Luis Manuel's portfolio" />
        <meta name="author" content="Luis Manuel González" />
        <meta name="author" content="LuisManuelGlz" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{t('home')} | Luis Manuel</title>
      </Head>

      <Navigation path={router.asPath} />

      <Container maxW="container.md">{children}</Container>

      <Footer />

      <ToastContainer
        position="top-center"
        hideProgressBar
        closeButton={false}
        pauseOnHover={false}
      />
    </Box>
  );
};

export default main;
