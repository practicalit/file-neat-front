import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  colors,
} from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  listItemAvatar: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    alignSelf: 'flex-start',
  },
}));

const Faq = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ListItem disableGutters key={index} data-aos="fade-up">
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <IconAlternate
                      size="small"
                      shape="circle"
                      fontIconClass={'fas fa-question'}
                      color={colors.amber}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.text}
                    primaryTypographyProps={{
                      variant: 'h6',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                    }}
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SectionHeader
            title="Get File Neat and secure file transfer."
            subtitle="Focus on the business and let file transfer from your customers be not an issue at all."
            align="center"
            ctaGroup={[
              <Button color="primary" variant="contained" size="large">
                Get it Now
              </Button>,
            ]}
            disableGutter
            data-aos="fade-up"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
