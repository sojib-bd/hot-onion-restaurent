import React from 'react';
import Header from '../Header/Header';
import './FrontPage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import BreakfastPage from '../BreakfastPage/BreakfastPage';
import LunchPage from '../LunchPage/LunchPage';
import DinnerPage from '../DinnerPage/DinnerPage';
import FooterButton from '../FooterButton/FooterButton';
import MarketingSection from '../MarketingSection/MarketingSection';
import Demo from '../ItemDetail/Demo';
import Shipment from '../Shipment/Shipment';

const FrontPage = () => {
    return (
        <div>
            <Header />
            <div className="itemDisplay" id="displayItems">
                <Router>
                    <Switch>
                        <Route path='/breakfast'>
                            <BreakfastPage />
                        </Route>
                        <Route path='/lunch'>
                            <LunchPage />
                        </Route>
                        <Route path='/dinner'>
                            <DinnerPage />
                        </Route>
                        <Route path='/shipment'>
                            <Shipment />
                        </Route>
                        <Route path="/">
                            <BreakfastPage />
                        </Route>
                    </Switch>
                    <Link to='/shipment'><FooterButton /></Link>
                </Router>
            </div>
            <div className="marketing">
                <div className="header-text">
                    <h2>Why you choose us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem in, sequi dolorum reiciendis quibusdam!  </p>

                </div>

                <MarketingSection />
            </div>
        </div>
    );
};

export default FrontPage;