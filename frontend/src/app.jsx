import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import ThankYou from './thankyou';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={RegisterForm} />
                <Route exact path="/thank-you" component={ThankYou} />
            </Switch>
        </Router>
    );
}

export default App;
