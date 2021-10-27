import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./utils/Button";


const RegisterBack = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a5b1c2;
`;

const RegisterWrap = styled.div`
    width: 360px;
    height: 400px;
    padding: 32px;
    border-radius: 5px;
    background-color: white;
`;

const Title = styled.div`
    text-align: center;
    padding-bottom: 2rem;
    font-size: 24px;
    font-weight: 600;
`;

const RegisterFromBlock = styled.div`
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

const RegisterForm
 = ({ form, onLogin, onChangeInput, onClean, }) => {
    const onSubmit = e => {
        e.preventDefault();
        const { id, password } = form;
        onLogin({ id, password });
        onClean('register');
    }
    const onChange = e => { 
        const { value, name } = e.target;
        onChangeInput({ 
            form: 'register',
            key: name,
            value,
         });
    }
    
    return (
        <RegisterBack>
            <RegisterWrap>
                <Title>Planet Blog</Title>
                <RegisterFromBlock>
                    <h3>Register</h3>
                    <form onSubmit={onSubmit}>
                        <StyledInput name="id" placeholder="ID" onChange={onChange} value={form} />
                        <StyledInput name="password" placeholder="password" type="password" onChange={onChange} value={form} />
                        <StyledInput name="passwordConfirm" placeholder="confirm password" type="password" onChange={onChange} value={form} />
                        <ButtonWithMarginTop type="submit" orange fullWidth>Register</ButtonWithMarginTop>
                    </form>
                    <Footer>
                        <Link to="/login">Login</Link>
                    </Footer>
                </RegisterFromBlock>
            </RegisterWrap>
        </RegisterBack>
    )
}

export default RegisterForm
;