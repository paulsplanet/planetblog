import React from "react";
import RegisterForm from "../../Components/RegisterForm";
//import { connect } from "react-redux";



const RegisterContainer = () => {
    
    
    return (
        <RegisterForm />
    )
};

export default RegisterContainer;

/*
export default connect(
   ({ register }) => ({
       login: auth.login,
       user: auth.user
   }),
   {
       changeInput,
       loginForm,
       cleanForm,
   }
)(LoginContainer);
*/



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



