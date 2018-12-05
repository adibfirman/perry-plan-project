import React, { Suspense, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Loader from '../components/Loader';
import Navbar from '../components/layouts/Navbar';

// component page view
const Dashboard = React.lazy(() => import('../views/dashboard'))
const ProjectDetail = React.lazy(() => import('../views/projects/Detail'))
const SignIn = React.lazy(() => import('../views/auth/SignIn'))
const SignUp = React.lazy(() => import('../views/auth/SignUp'))
const ProjectCreate = React.lazy(() => import('../views/projects/Create'))

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Route exact path="/" component={props => <Dashboard { ...props }/>} />
        <Route path="/project/:id" component={props => <ProjectDetail { ...props }/>} />
        <Route path="/signin" component={props => <SignIn { ...props }/>} />
        <Route path="/signup" component={props => <SignUp { ...props }/>} />
        <Route path="/create" component={props => <ProjectCreate { ...props }/>} />
      </Suspense>
    </Fragment>
  </BrowserRouter>
)

export default Routes;
