import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'modules/store';
import RouteTemplates from 'components/ppo/index';
import IntroTemplates from 'components/ppo/templates/introduce';
import HomeTemplates from 'components/ppo/templates/home'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

            <Route exact path="/" component={HomeTemplates} />
            <Route path="/A" component={IntroTemplates} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
