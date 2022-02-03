import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'modules/store';
import IntroTemplates from 'components/pfo/templates/introduce';
import HomeTemplates from 'components/pfo/templates/home'
import ProjectMiddle from 'components/pfo/templates/project';
import CareerTemplates from 'components/pfo/templates/career';
import ProjectNice from 'components/pfo/templates/project/nice';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

            <Route exact path="/" component={HomeTemplates} />
            <Route path="/introduce" component={IntroTemplates} />

            <Route exact path="/project" component={ProjectMiddle} />
            <Route path="/project/nice" component={ProjectNice} />

            <Route path="/career" component={CareerTemplates} />


        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
