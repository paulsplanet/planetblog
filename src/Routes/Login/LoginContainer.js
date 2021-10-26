import React from "react";
import LoginForm from "../../Components/LoginForm";
import { connect } from "react-redux";
import { loginForm, changeInput } from "../../modules/auth";


const LoginContainer = ({ login, loginForm, changeInput }) => {
    
    
    return (
        <>
        <LoginForm   form={login} onLogin={loginForm} onChangeInput={changeInput} />
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



