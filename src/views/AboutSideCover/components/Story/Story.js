import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Story = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Our story"
        subtitle="We are dedicated to give you a peace of mind for you and your customers through simple and SECURE file sharing. In just three steps, customers are able to send their secure file and you will get a to download the document. Then, the file gets deleted in a couple of hours after it is downloaded."
        align={isMd ? 'center' : 'left'}
        disableGutter
        subtitleProps={{
          color: 'textPrimary',
          variant: 'body1',
        }}
      />
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
