// style
import './styled/scss/App.scss';
// react and other modules.
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from './utils/history';
//
import Header from './components/layouts/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// make lazy loading
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const SignPage = lazy(() => import('./pages/SignPage/SignPage'));
const DashBoard = lazy(() => import('./pages/DashBoard/DashBoard'));
const UserLandingPage = lazy(() =>
  import('./pages/UserLandingPage/UserLandingPage')
);

//
class App extends React.Component {
  componentDidMount() {
    if (this.props.token) {
      history.push('/userland');
    }
  }

  render() {
    const { token } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/userland" component={UserLandingPage} />
              <Route
                exact
                path="/sign"
                render={() => (token ? <Redirect to="/userland" /> : <SignPage />)}
              />
              <Route exact path="/dashboard" component={DashBoard} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { token: state.userAuth.token };
};

export default connect(
  mapStateToProps,
  { loadUser }
)(App);

// export SASS_BINARY_PATH="C:\Users\mkz\win32-x64-72_binding.node"
