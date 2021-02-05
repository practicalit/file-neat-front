import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    pages: {
      title: 'Info',
      id: 'supported-pages',
      children: {
        company: {
          groupTitle: 'Company',
          pages: [
            {
              title: 'About',
              href: '/about-file-neat',
            },
            {
              title: 'Pricing',
              href: '/pricing',
            },
            {
              title: 'Terms',
              href: '/company-terms',
            },
            {
              title: 'Identify Company',
              href: '/identify-company',
            },
            {
              title: 'Verify Customer',
              href: '/verify-customer',
            },
            {
              title: 'Identify Customer',
              href: '/identify-customer',
            }, 
          ],
        },
        blog: {
          groupTitle: 'Blog',
          pages: [
            {
              title: 'Article',
              href: '/blog-article',
            },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/portfolio-page',
            },
            {
              title: 'Masonry',
              href: '/portfolio-masonry',
            },
            {
              title: 'Grid View',
              href: '/portfolio-grid',
            },
            {
              title: 'Parallax Effect',
              href: '/agency',
            },
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/account/?pid=general',
            },
            {
              title: 'Security',
              href: '/account/?pid=security',
            },
            {
              title: 'Notifications',
              href: '/account/?pid=notifications',
            },
            {
              title: 'Billing',
              href: '/account/?pid=billing',
            },
            {
              title: 'Upload',
              href: '/upload'
            },
            {
              title: 'List Files',
              href: '/account/?pid=ListFiles',
            },
            {
              title: 'ListMembers',
              href: '/account/?pid=ListMembers',
            },
            {
              title: 'Search File',
              href: '/account/?pid=SearchFile',
            },
            {
              title: 'Acknowledgement',
              href: '/ack',
            },
            {
              title: 'Add File',
              href: '/account/?pid=AddFiles',
            },
          ],
        },
        //needs cleanup here
        signup: {
          groupTitle: 'Login',
          pages: [
            {
              title: 'Sign Up',
              href: '/signup',
            },
            {
              title: 'Sign In',
              href: '/signin',
            },
            {
              title: 'Password Reset',
              href: '/password-reset',
            }

          ],
        },
        password: {
          groupTitle: '',
          pages: [
          ],
        },
        error: {
          groupTitle: '',
          pages: [
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
