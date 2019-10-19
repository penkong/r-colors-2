//
import './styled/scss/App.scss';
import React, { lazy, Suspense , useEffect } from "react";
import { Switch, Route , Redirect  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// Redirect from react-router-dom
import Header from "./components/layouts/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// make lazy loading 
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const SignPage = lazy(() => import('./pages/SignPage/SignPage'));
const DashBoard = lazy(() => import('./pages/DashBoard/DashBoard'));
//
const App = () => {
  const token = useSelector(state => state.token); 
  useEffect(() => {
    useDispatch(() => fetchUser());
  }, [token])
  return (
    <div>
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={(<Spinner/>)}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path='/sign'
              render={() =>
                token 
                ? <Redirect to='/dashboard' />
                : <SignPage />
              }
            />
            <Route exact path="/dashboard" component={DashBoard} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}
export default App;
















// {
//   /* <Route exact path="/signin" 
//                 render={()=>
//                   currentUser 
//                   ? (<Redirect to='/'/>) 
//                   : (<SignPage/>)
//                 } 
//               /> */
// }
