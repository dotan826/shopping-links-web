import { Button, Typography, ConfigProvider, Input, Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { TypedReducers } from '../../Redux/Reducers/index';
import { ChangeIsConnected } from '../../Redux/Actions/GeneralActions';

const ContentContainer = styled.div`
    display: flex;



    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 300px;
        height: 500px;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 500px;
        height: 300px;
    }
`;

const HeaderArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer

    }
`;

const FormArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > *{
        margin: 10px;
    }

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column-reverse;
        
    }

    @media only screen and (min-width: 577px) {  // On Computer

    }
`;

const FormLine = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
    }
`;

const FormLabel = styled(Typography.Text)`
    width: 100px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    background-color: lightgray;
    font-size: 16px;
`;

const ButtonArea = styled.div`

`;



const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseURL = useSelector((state: TypedReducers) => state.generalReducer.baseURL); // base URL from redux
    const dispatch = useDispatch();

    const onLoginClick = () => {
        if (email.length > 0 && password.length > 0) {
            axios.post(baseURL + "/login", { email: email, password: password }).then((result) => {
                if (result.data) {
                    dispatch(ChangeIsConnected(true));
                }
                else {
                    Modal.info({
                        title: "הכניסה נכשלה",
                        content: "יש לבדוק את הסיסמא ו/או אי מייל ולנסות שוב.",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
            });
        }
        else {
            Modal.info({
                title: "הכניסה נכשלה",
                content: "יש למלא את השדות ולנסות שוב.",
                style: {
                    direction: "rtl"
                }
            });
        }
    }

    return (
        <ContentContainer>
            <HeaderArea>
                <ConfigProvider direction="rtl">
                    <Typography.Text style={{ fontSize: "20px" }}>
                        שלום מנהל !
                        </Typography.Text>
                </ConfigProvider>
            </HeaderArea>

            <ConfigProvider direction="rtl">
                <FormArea>
                    <div>
                        <Button type="primary" size="large" onClick={() => { onLoginClick() }}>היכנס</Button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FormLine>
                            <FormLabel>אי מייל :</FormLabel>
                            <Input type="text" name="username" id="username" placeholder="Email" style={{ width: "auto", margin: "10px", borderRadius: "5px", fontSize: "16px", direction: "ltr" }} onChange={(event) => { setEmail(event.target.value) }} value={email}></Input>
                        </FormLine>
                        <FormLine>
                            <FormLabel>סיסמא :</FormLabel>
                            <Input.Password name="password" id="password" placeholder="Password" style={{ width: "auto", margin: "10px", borderRadius: "5px", fontSize: "16px", direction: "ltr" }} onChange={(event) => { setPassword(event.target.value) }} value={password}></Input.Password>
                        </FormLine>
                    </div>
                </FormArea>
            </ConfigProvider>

            <ButtonArea>
                <Link to="/clients/contact">
                    <Button type="primary" danger size="large">
                        חזור לאתר
                        </Button>
                </Link>
            </ButtonArea>

        </ContentContainer>
    );
}

export default LoginPage;

