import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ListMovie from '../pages/ListMovie';
import FastDeck from '../pages/FastDeck';
import FastDeckShare from '../pages/FastDeckShare';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListMovie} />
        <Route path="/login" component={SignIn} />

        <Route path="/pokemon/" exact component={ListMovie} />
        <Route path="/pokemon/:page" component={ListMovie} />

        <Route path="/my-fast-deck/id" exact component={FastDeckShare} />
        <Route path="/my-fast-deck/id/:user" component={FastDeckShare} />

        <Route path="/my-fast-deck/" exact component={FastDeck} />
        <Route path="/my-fast-deck/:page" component={FastDeck} />

        <Route component={() => <h1>Essa pagina não existe</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
