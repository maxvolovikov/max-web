import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

import Home from './routes/Home';
import NavMenu from './components/NavMenu';
import Resume from './routes/Resume';
import About from './routes/About';

const DisplayMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;


function App() {
  return (
    <div className="App" style={{textAlign: "center", padding: "1em", border: 'thin solid red'}}>
      <Router>
        <DisplayMenuWrapper>
          <NavMenu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </DisplayMenuWrapper>        
      </Router>
    </div>
  );
}

export default App;
