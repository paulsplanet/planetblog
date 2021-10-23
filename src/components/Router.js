import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import PostList from "./../Routes/PostList"


const Navigation = function() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={PostList} />
                { /* 
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/write" component={Write} />
                <Route path="/Post" component={Post} />
                */}
                <Redirect from="*" to="/" />
            </Switch>    
        </Router>
    )
};

export default Navigation;