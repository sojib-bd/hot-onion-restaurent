import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BreakfastPage from './Components/BreakfastPage/BreakfastPage';
import LunchPage from './Components/LunchPage/LunchPage';
import DinnerPage from './Components/DinnerPage/DinnerPage';
import FooterButton from './Components/FooterButton/FooterButton';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/breakfast'>
            <BreakfastPage></BreakfastPage>
          </Route>
          <Route path='/lunch'>
            <LunchPage></LunchPage>
          </Route>
          <Route path='/dinner'>
            <DinnerPage></DinnerPage>
          </Route>
          <Route path="/">
            <BreakfastPage></BreakfastPage>
          </Route>
        </Switch>
      </Router>
      <FooterButton></FooterButton>
    </div>
  );
}

export default App;
