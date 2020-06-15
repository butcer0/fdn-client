import React from "react";
import {Route, Switch, Router} from "react-router-dom";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import {
    ParticipantCreate,
    ParticipantDelete,
    ParticipantEdit,
    ParticipantList,
    ParticipantShow
} from "./participants";
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={ParticipantList}/>
                        <Route path="/participants/new" exact component={ParticipantCreate}/>
                        <Route path="/participants/edit/:id" exact component={ParticipantEdit}/>
                        <Route path="/participants/delete/:id" exact component={ParticipantDelete}/>
                        <Route path="/participants/:id" exact component={ParticipantShow}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </div>
    )
}

export default App;
