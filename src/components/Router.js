import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import PostList from "../Routes/PostList";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Post from "../Routes/Post";
import PostViewer from "../Routes/PostViewer";


const Navigation = function() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={PostList} /> 
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/post" component={Post} />
                <Route path="/@:username/:postId" component={PostViewer} />
                <Redirect from="*" to="/" />
            </Switch>    
        </Router>
    )
};

export default Navigation;