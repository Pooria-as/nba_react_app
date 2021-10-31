import React from 'react';
import { Route, Switch } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


const App = () =>
{
    return (<div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        <Footer/>


    </div>)
}

export default App