import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Section, SectionAlternate } from 'components/organisms';

import {
  Upload,
  Promo
} from './components';

import { partners, jobCategories, jobs, companies, faq } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const FileUpload = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Upload />
      <SectionAlternate>
        <Promo data={partners} />
      </SectionAlternate>
    </div>
  );
};

export default FileUpload;