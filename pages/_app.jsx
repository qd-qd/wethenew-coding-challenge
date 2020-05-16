import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from '@components/Header';
import '@theme/variables.css';
import '@theme/global.css';

/*
 ** @dev: This file is a HoC which render all pages. As every props pass to this component
 ** should be redistribute to child component, I have no choice but to disable that rule.
 */
/* eslint-disable react/jsx-props-no-spreading */
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Wethenew</title>
      <link rel="icon" href="/favicon.ico" key="icon" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
        key="apple-touch-icon:180x180"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        key="icon:32x32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        key="icon:16x16"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
        key="font"
      />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
);

MyApp.defaultProps = {
  pageProps: {},
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  pageProps: PropTypes.shape({}),
};

export default MyApp;
