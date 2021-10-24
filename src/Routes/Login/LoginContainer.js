import React from "react";
import LoginForm from "../../Components/LoginForm";
import styled from "styled-components";
import { connect } from "react-redux";


const LoginBack = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a5b1c2;
`;

const LoginWrap = styled.div`
    width: 360px;
    height: 360px;
    padding: 32px;
    background-color: white;
`;

const Title = styled.div`
    text-align: center;
    padding-bottom: 2rem;
    font-size: 24px;
    font-weight: 600;
`;

const LoginContainer = ({ login, username, submit }) => {

    return (
        <LoginBack>
            <LoginWrap>
                <Title>Planet Blog</Title>
                <LoginForm login={login} username={username} onSubmit={submit} />
            </LoginWrap>
        </LoginBack>
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