import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
import rootReducer from "redux/reducer/rootReducer"
import rootSaga from "redux/saga/rootSaga"
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// pages for this kit
import Home from "views/pages/Home.js";
import Jobs from "views/pages/Jobs.js";
import Courses from "views/pages/Courses.js";
import Agencies from "views/pages/Agencies.js";
import Forum from "views/pages/Forum.js";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData
} from '@plasmicapp/loader-react';
import { PLASMIC } from './plasmic-init';
import { useEffect, useState } from 'react';
import CatchAllPage from "CatchAllPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),

)
sagaMiddleware.run(rootSaga);

root.render(
  <PlasmicRootProvider loader={PLASMIC}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} />} />
            <Route path="/jobs" render={(props) => <Jobs {...props} />} />
            <Route path="/courses" render={(props) => <Courses {...props} />} />
            <Route path="/agencies" render={(props) => <Agencies {...props} />} />
            <Route path="/forum" render={(props) => <Forum {...props} />} />
            <Route path="/" render={(props) => <CatchAllPage {...props} />} />
            <Redirect to="/home" />
            {/* <Redirect from="/" to="/home" /> */}
          </Switch>
        </Switch>
      </BrowserRouter>
    </Provider>
  </PlasmicRootProvider>
);

