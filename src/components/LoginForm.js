import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./utils/Button";


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

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: #485460;
        margin-bottom: 1rem;
    }
`;

const StyledInput =styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #485460;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: #ffc048;
        border-bottom: 1px solid #1e272e;
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: #d2dae2;
        text-decoration: underline;
        &:hover {
            color: #ffc048;
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

/*const ErrorMessage = styled.div`
    color: #eb3b5a;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;*/

const LoginForm = ({ form, onLogin, onChangeInput, onClean, }) => {
    const onSubmit = e => {
        e.preventDefault();
        const { id, password } = form;
        onLogin({ id, password });
        onClean('login');
    }
    const onChange = e => { 
        const { value, name } = e.target;
        onChangeInput({ 
            form: 'login',
            key: name,
            value,
         });
    }
    
    return (
        <LoginBack>
            <LoginWrap>
                <Title>Planet Blog</Title>
                <AuthFormBlock>
                    <h3>LogIn</h3>
                    <form onSubmit={onSubmit}>
                        <StyledInput name="id" placeholder="ID" onChange={onChange} value={form.id} />
                        <StyledInput name="password" placeholder="password" type="password" onChange={onChange} value={form.password} />
                        <ButtonWithMarginTop type="submit" orange fullWidth>LogIn</ButtonWithMarginTop>
                    </form>
                    <Footer>
                        <Link to="/register">Register</Link>
                    </Footer>
                </AuthFormBlock>
            </LoginWrap>
        </LoginBack>
    )
}

export default LoginForm;