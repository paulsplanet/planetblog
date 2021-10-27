import React, { useEffect } from "react";
import RegisterForm from "../../Components/RegisterForm";
import { connect } from "react-redux";
import { typeInput, registerForm, cleanInput } from "../../modules/register"



const RegisterContainer = ({ register, users, status, typeInput, registerForm, cleanInput, history }) => {
    useEffect(() => {
        if (status) history.push('/')
    })
    
    return (
        <RegisterForm form={register} onTypeInput={typeInput} onRegisterForm={registerForm} onCleanInput={cleanInput} />
    )
};


export default connect(
   ({ register }) => ({
       register: register.register,
       users: register.users,
       status: register.status
   }),
   {
       typeInput,
       registerForm,
       cleanInput,
   }
)(RegisterContainer);


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



