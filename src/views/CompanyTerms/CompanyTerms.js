import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';
import { Section, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const CompanyTerms = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <DescriptionCta
          title="Terms of Service"
          subtitle="Updated on 12.21.2020"
          primaryCta={
            <Button variant="outlined" color="primary" size="large">
              Print
            </Button>
          }
          align={'left'}
          titleProps={{
            className: classes.fontWeightBold,
            color: 'textPrimary',
          }}
          subtitleProps={{
            color: 'textSecondary',
          }}
        />
        <Divider className={classes.divider} />
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <SectionHeader
              title="Summary"
              subtitle="Here’s an overview of what each license allows for to make it easy to pick what you need:"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
            />
            <SectionHeader
              title="About the licence"
              subtitle="The license is good for every features needed as far file management is concerned. The license is good for the time that you have made payments. You can look more in the pricing section as well."
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Allow your customers to upload files securely.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Getting notifications as customers are uploading sensitive files and before the link got expired to get downloaded.
                  .
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Online signage approval from the customers. It could be PDF files to be signed or concents to be given.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                 Listing all the files the customers have uploaded and showing the status of the uploads.
                </Typography>
              </ListItem>
            </List>
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  STANDARD LICENSE
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  EXTENDED LICENSE
                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="Additional terms"
              subtitle="The license is fully applicable and is provided as is. The security of the files requires even more security handling from your end as well. Once you got the files downloaded to you, it is will be all upto you to provide the full security as well."
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    src="/assets/images/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  “WEBSITE” means the service and{' '}
                  <a href="http://fileneat.com/" className={classes.link}>
                    http://fileneat.com
                  </a>{' '}
                  and subsidiary websites.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={isMd ? 4 : 2} direction="column">
              <Grid item xs={12}>
                <CardBase withShadow className={classes.cardHighlighted}>
                  <SectionHeader
                    title="Have a question?"
                    subtitle="Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!"
                    ctaGroup={[<Button variant="contained">Contact us</Button>]}
                    disableGutter
                    align="left"
                    titleProps={{
                      variant: 'subtitle1',
                      className: clsx(
                        classes.textWhite,
                        classes.fontWeightBold,
                      ),
                    }}
                    subtitleProps={{
                      variant: 'body2',
                      className: classes.textWhite,
                    }}
                  />
                </CardBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Divider />
    </div>
  );
};

export default CompanyTerms;
