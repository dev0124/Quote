import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Quotes from './components/Quote/quotes'
import CreateQuote from './components/Quote/CreateQuote'
import QuoteDetails from "./components/Quote/QuoteDetails";

const routing = () =>(
    <div>
        <Switch>
            <Route exact path="/" component={Quotes} label="Quotes"/>
            <Route path="/quote/view" component={QuoteDetails} />
            <Route path="/quote/new" component={CreateQuote} />
        </Switch>
    </div>
)
export default routing;


