import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'modules/store';
import Chat from 'components/pages/Chat';
import Test from 'test/index';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/chat" component={Chat} />
            <Route path="/test" component={Test} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
