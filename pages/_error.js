import React from 'react';
import ServerError from 'views/ServerError';
import Minimal from 'layouts/Minimal';

const ErrorPage = () => {
  return (
    <div className="container">
      <Minimal>
        <ServerError />
      </Minimal>
    </div>
  )
};

export default ErrorPage;