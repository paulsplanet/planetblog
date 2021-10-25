import React from "react";
import LoginForm from "../../Components/LoginForm";
import { connect } from "react-redux";


const LoginContainer = ({ login, username, submit }) => {

    return (
        <LoginForm login={login} username={username} onSubmit={submit} />
    )
};

const mapStateToProps = state => ({
    login: state.auth.login,
    username: state.auth.username,
});

const mapDispatchToProps = dispatch => ({
    submit: () => {
        console.log("submit")
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginContainer);