import React from 'react';
import { Route, Switch } from 'react-router';
import Article from './components/Articles/Article';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Teams from './components/Teams/Team';


const App = () =>
{
    return (<div>
            <Header/>
            <Switch>
                <Route exact path='/teams' component={Teams} />
                <Route exact path='/Article/:id' component={Article} />
                <Route exact path='/' component={Home} />
            </Switch>
        <Footer/>


    </div>)
}

export default App