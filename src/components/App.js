import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import {
    ParticipantCreate,
    ParticipantDelete,
    ParticipantEdit,
    ParticipantList,
    ParticipantShow
} from "./participants";

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    )
}

export default App;
