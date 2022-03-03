import React, {useEffect} from 'react';
import './App.css';
import Header from './components/header/Header';

import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ContactPage from './views/contact/Contact';
import Projects from './views/projects/Projects';
import Footer from './components/footer/Footer';

import Freelance from './views/freelance/Freelance';
import Home from './views/home/Home';

export default function App() {

    useEffect(() => {
        // initialize()
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className="container">
                    <div className="wrapper">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/freelance" component={Freelance} />
                            <Route exact path="/contact" component={ContactPage} />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
