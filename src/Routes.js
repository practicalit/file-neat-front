/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import ListFiles from 'views/Account/components/ListFiles';
import IdentifyCustomer from 'views/IdentifyCustomer';


import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  AboutSideCover as AboutSideCoverView,
  Account as AccountView,
  ContactPage as ContactPageView,
  CompanyTerms as CompanyTermsView,
  BlogArticle as BlogArticleView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  Pricing as PricingView,
  SigninSimple as SigninSimpleView,
  SignupSimple as SignupSimpleView,
  Thankyou as ThankyouView,
  WebBasic as WebBasicView,
  Upload as UploadView,
  VerifyCustomer as VerifyCustomerView,
  IdentifyCustomer as IdentifycustomerView,
  IdentifyCompany as IdentifyCompanyView,
  Acknowledge as AcknowledgeView,
  AddFiles as AddFilesView
} from './views';

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/web-basic" /> */}
      <RouteWithLayout
        component={WebBasicView}
        exact
        layout={MainLayout}
        path="/"
      />    
       <RouteWithLayout
        component={PricingView}
        exact
        layout={MainLayout}
        path="/pricing"
      />
      <RouteWithLayout
        component={ThankyouView}
        exact
        layout={MainLayout}
        path="/upload-thankyou"
      />
      <RouteWithLayout
        component={ContactPageView}
        exact
        layout={MainLayout}
        path="/contact-page"
      />
      <RouteWithLayout
        component={WebBasicView}
        exact
        layout={MainLayout}
        path="/web-basic"
      />
      <RouteWithLayout
        component={CompanyTermsView}
        exact
        layout={MainLayout}
        path="/company-terms"
      />
      <RouteWithLayout
        component={AboutSideCoverView}
        exact
        layout={MainLayout}
        path="/about-file-neat"
      />
      <RouteWithLayout
        component={BlogArticleView}
        exact
        layout={MainLayout}
        path="/blog-article"
      />
      <RouteWithLayout
        component={PasswordResetSimpleView}
        exact
        layout={MinimalLayout}
        path="/password-reset"
      />
      <RouteWithLayout
        component={SigninSimpleView}
        exact
        layout={MinimalLayout}
        path="/signin"
      />
      <RouteWithLayout
        component={SignupSimpleView}
        exact
        layout={MinimalLayout}
        path="/signup"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={IdentifyCompanyView}
        exact
        layout={MainLayout}
        path="/identify-company"
      />
       <RouteWithLayout
        component={UploadView}
        exact
        layout={MainLayout}
        path="/Upload"
        />
      <RouteWithLayout
        component={VerifyCustomerView}
        exact
        layout={MainLayout}
        path="/verify-customer"
      />
      <RouteWithLayout
        component={IdentifycustomerView}
        exact
        layout={MainLayout}
        path="/identify-customer"
      />
      <RouteWithLayout
        component={AcknowledgeView}
        exact
        layout={MainLayout}
        path="/ack"
      />
      
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;

