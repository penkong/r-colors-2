//
import "./styled/scss/App.scss";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';





import Header from "./components/layouts/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


// make lazy loading 
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const Shop = lazy(() => import('./pages/ShopPage/Shop'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));
const SignPage = lazy(() => import('./pages/SignPage/SignPage'));
// on suspense use error handling if we lose connection ==> error boundary work like suspense
const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <ErrorBoundary>
          {/* suspense for async loading comp with lazy */}
          <Suspense fallback={Spinner}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/signin" 
              render={()=>
                currentUser 
                ? (<Redirect to='/'/>) 
                : (<SignPage/>)
              } 
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
