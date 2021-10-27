import React, { useEffect } from "react";
import LoginForm from "../../Components/LoginForm";
import { connect } from "react-redux";
import { loginForm, changeInput, cleanForm } from "../../modules/auth";


const LoginContainer = ({ user, login, loginForm, changeInput, cleanForm, history }) => {
    useEffect(() => {
        if(user.id) history.push('/')
    })
    
    return (
        <>
        <LoginForm   form={login} onLogin={loginForm} onChangeInput={changeInput} onClean={cleanForm} />
        </>
    )
};


export default connect(
   ({ auth }) => ({
       login: auth.login,
       user: auth.user
   }),
   {
       changeInput,
       loginForm,
       cleanForm,
   }
)(LoginContainer);



/*
const mapStateToProps = state => ({
    login: state.auth.login,
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    loginForm: () => {
        dispatch(loginForm())
    },
    changeInput: () => {
        dispatch(changeInput())
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginContainer)
*/



