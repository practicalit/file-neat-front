import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { CssBaseline, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../src/theme';

import AOS from 'aos';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

export default function TopLayout(props) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/favicons/apple-icon-57x57.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/favicons/apple-icon-60x60.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/favicons/apple-icon-72x72.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/favicons/apple-icon-76x76.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/favicons/apple-icon-114x114.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/favicons/apple-icon-120x120.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/favicons/apple-icon-144x144.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/favicons/apple-icon-152x152.png"
        />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicons/apple-icon-180x180.png"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/assets/favicons/android-icon-192x192.png"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicons/favicon-32x32.png"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/assets/favicons/favicon-96x96.png"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
        name="msapplication-TileImage"
        content="/assets/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
        name="description"
        content="A modern design system for your new landing and web pages."
        />
        <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
        property="og:image"
        content="https://thefront.maccarianagency.com/assets/social.png"
        />
        <meta
        property="og:title"
        content="theFront | UI Kit by Maccarian Agency."
        />
        <meta
        property="og:description"
        content="A modern design system for your new landing and web pages."
        />
        <meta property="og:url" content="https://thefront.maccarianagency.com/" />
        <link
        href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
        rel="stylesheet"
        />
        <script
        src="https://kit.fontawesome.com/4c273e6d43.js"
        crossOrigin="anonymous"
        ></script>
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Paper>
          {props.children}
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
