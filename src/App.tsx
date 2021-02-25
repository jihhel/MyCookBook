import React, {useState, useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import LibraryScreen from './Screens/Library/LibraryScreen';
import MenuScreen from './Screens/Menu/MenuScreen';

function App() {

  return (
    <Router>
      <Route render={({ location, history }) => (
          <React.Fragment>
              <SideNav
                  onSelect={(selected: any) => {
                      const to = '/' + selected;
                      if (location.pathname !== to) {
                          history.push(to);
                      }
                  }}
              >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                      <NavItem eventKey="library">
                          <NavIcon>
                              <i className="fas fa-book-open" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Recettes
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="menu">
                          <NavIcon>
                              <i className="far fa-calendar-alt" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Faire son menu
                          </NavText>
                      </NavItem>
                  </SideNav.Nav>
              </SideNav>
              <main>
                  <Route path="/" exact component={(props: any) => <LibraryScreen />} />
                  <Route path="/library" component={(props: any) => <LibraryScreen />} />
                  <Route path="/menu" component={(props: any) => <MenuScreen />} />
              </main>
          </React.Fragment>
      )}
      />
  </Router>
  );
}

export default App;
