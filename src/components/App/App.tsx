import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import MainWebPage from '../MainWebPage/MainWebPage';
import WebClientsPage from '../WebClientsPages/WebClientsPage';
import WebManagePage from '../WebManagerPages/WebManagePage';

function App() {

  /**
   * for testing redux...
   */
  // import { useDispatch, useSelector } from 'react-redux';         // for testing redux...
  // import { TypedReducers } from '../Redux/Reducers/index';        // ...
  // import * as actions from '../Redux/Actions/GeneralActions';     // ...

  // const userID = useSelector((state: TypedReducers) => state.generalReducer.userID); // useSelector - for get data !
  // const dispatch = useDispatch(); // useDispatch - for change data !
  // dispatch(actions.changeUserID("45")); // example for calling action and change the data !

  return (

    <div>
      <Switch>
        <Route path="/manage">
          <WebManagePage></WebManagePage>
        </Route>
        <Route path="/clients">
          <WebClientsPage></WebClientsPage>
        </Route>
        <Route path="/">
          <MainWebPage></MainWebPage>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
