import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./utils/Button";

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }

    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .right {
        display: flex;
        align-items: center;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;

const HeaderButton = styled.Button`
    background-color: white;
    color: black;
    border: 1px solid #666;
    &:hover {
        background-color: #f7f7f7;
    }
`;

const Header = ({ user, onLogout }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        REACTORS
                    </Link>
                    {user ? (
                        <div className="right">
                            <UserInfo>{user.username}</UserInfo>
                            <HeaderButton onClick={onLogout}>Logout</HeaderButton>
                        </div>
                    ) : (
                        <div className="right">
                            <Button to="/login">Login</Button>
                        </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    )
};

export default Header;