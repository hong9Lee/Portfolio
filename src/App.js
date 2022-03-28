import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'modules/store';
import IntroTemplates from 'components/pfo/templates/introduce';
import HomeTemplates from 'components/pfo/templates/home'
import ProjectMiddle from 'components/pfo/templates/project';
import CareerTemplates from 'components/pfo/templates/career';
import ProjectNice from 'components/pfo/templates/project/nice';
import ProjectYonsei from 'components/pfo/templates/project/yonsei';
import ProjectIcs from 'components/pfo/templates/project/ics';
import MainTemplates from 'components/pfo/templates/main'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

            <Route exact path="/" component={MainTemplates} />
            <Route path="/introduce" component={IntroTemplates} />

            <Route exact path="/project" component={ProjectMiddle} />
            <Route path="/project/nice" component={ProjectNice} />
            <Route path="/project/yonsei" component={ProjectYonsei} />
            <Route path="/project/ics" component={ProjectIcs} />


            <Route path="/career" component={CareerTemplates} />


        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
