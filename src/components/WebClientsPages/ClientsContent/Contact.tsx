import { Typography, Image, Input, ConfigProvider, Button, Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TypedReducers } from '../../Redux/Reducers/index';
import { useSelector } from 'react-redux';

import contactIcon from '../../../Svg/045-promotion.svg';
import avocado from '../../../Images/avocadoFadeSmallSize.png';

const ContentLayoutContainer = styled.div`
    display: flex;
    
    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 600px;
    }
`;

const MenuIcons = styled(Image)`

    @media only screen and (max-width: 576px) {  // On Mobile
      width: 50px;

    }

    @media only screen and (min-width: 577px) {  // On Computer
      width: 60px;
      
    }
`;

const HeaderArea = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin: 20px;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
      
    }
`;

const MiddleArea = styled.div`
    display: flex;
    font-size: 18px;
    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const FooterArea = styled.div`
    display: flex;
    margin: 15px;
    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        margin: 20px;
        width: 80%;
        font-size: 20px;
    }
`;

const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
    
    }
`;

const FormLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
    
    }
`;

const FormLabel = styled(Typography.Text)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
    
    }
`;

const FormInput = styled(Input)`
    border-radius: 10px;
    margin: 5px;
    font-size: 16px;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
    
    }
`;

const FooterLabel = styled(Typography.Text)`
    margin: 5px;
    min-width: 90px;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
    
    }
`;


const Contact = () => {
    const [fullNameField, setFullNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [phoneField, setPhoneField] = useState("");
    const [requestField, setRequestField] = useState("");

    const baseURL = useSelector((state: TypedReducers) => state.generalReducer.baseURL); // base URL for server while Testing !

    const formButtonSendClick = () => {
        if(fullNameField.length > 30){
            Modal.warning({ 
                title: "הגבלת תווים",
                content: "שם מלא יכול להכיל עד 30 תווים",
                style: {
                    direction: "rtl"
                }
             });
        }
        else if(emailField.length > 40){
            Modal.warning({ 
                title: "הגבלת תווים",
                content: "אי מייל יכול להכיל עד 40 תווים",
                style: {
                    direction: "rtl"
                }
             });
        }
        else if(phoneField.length > 40){
            Modal.warning({ 
                title: "הגבלת תווים",
                content: "טלפון יכול להכיל עד 40 תווים",
                style: {
                    direction: "rtl"
                }
             });
        }
        else if(requestField.length > 100){
            Modal.warning({ 
                title: "הגבלת תווים",
                content: "פנייה יכולה להכיל עד 100 תווים",
                style: {
                    direction: "rtl"
                }
             });
        }
        else if(fullNameField.length === 0 || emailField.length === 0 || phoneField.length === 0 || requestField.length === 0){
            Modal.warning({ 
                title: "שדות ריקים",
                content: "חובה למלא את כל השדות",
                style: {
                    direction: "rtl"
                }
             });
        }
        else{
            axios.post(baseURL + "/add/request", { fullName: fullNameField, email: emailField, phone: phoneField, request: requestField }).then((result) => {
                if(result){
                    setFullNameField("");
                    setEmailField("");
                    setPhoneField("");
                    setRequestField("");
                    Modal.info({ 
                        title: "הפנייה התקבלה",
                        content: "נחזור אלייך בהקדם האפשרי :)",
                        style: {
                            direction: "rtl"
                        }
                     });
                }
                else{
                    Modal.info({ 
                        title: "שגיאה ברשת",
                        content: "אירעה שגיאה בשליחה. נסו שוב בעוד כמה דקות, תודה :)",
                        style: {
                            direction: "rtl"
                        }
                     });
                }
            });
        }
    }

    return (
        <ConfigProvider direction="rtl">
            <ContentLayoutContainer>
                <HeaderArea>
                    <MenuIcons preview={false} src={contactIcon} style={{ marginLeft: "10px" }}></MenuIcons>
                    <Typography.Text underline={true} style={{ fontSize: "40px", marginRight: "10px" }}>
                        צור קשר
                </Typography.Text>
                </HeaderArea>
                <MiddleArea>
                    <div>
                        <Image preview={false} src={avocado} style={{ maxWidth: "300px" }}></Image>
                    </div>
                    <FormArea>
                        <FormLine>
                            <FormInput onChange={(event)=>{setFullNameField(event.target.value)}} value={fullNameField}></FormInput>
                            <FormLabel>שם מלא</FormLabel>
                        </FormLine>
                        <FormLine>
                            <FormInput onChange={(event)=>{setEmailField(event.target.value)}} value={emailField}></FormInput>
                            <FormLabel>אי מייל</FormLabel>
                        </FormLine>
                        <FormLine>
                            <FormInput onChange={(event)=>{setPhoneField(event.target.value)}} value={phoneField}></FormInput>
                            <FormLabel>טלפון</FormLabel>
                        </FormLine>
                        <FormLine>
                            <Input.TextArea autoSize={{ minRows: 4, maxRows: 4 }} style={{ borderRadius: "10px", direction: "rtl", margin: "5px", fontSize: "16px" }} onChange={(event)=>{setRequestField(event.target.value)}} value={requestField}></Input.TextArea>
                            <FormLabel>פנייה</FormLabel>
                        </FormLine>
                        <FormLine>
                            <Button type="ghost" style={{ margin: "10px" }} onClick={()=>{formButtonSendClick()}}>
                                שלח !
                            </Button>
                        </FormLine>
                    </FormArea>
                </MiddleArea>

                <FooterArea>
                    <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "center", alignItems: "center" }}>
                        <FooterLabel>
                            האי מייל שלנו :
                        </FooterLabel>
                        <Typography.Link href="mailto:dimam@outlook.com" style={{ margin: "5px", fontWeight: "bolder" }}>
                            dimam@outlook.com
                        </Typography.Link>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "center", alignItems: "center" }}>
                        <FooterLabel>
                            הכתובת שלנו :
                        </FooterLabel>
                        <FooterLabel>
                            אופססס.. עדיין אין לנו כתובת ! אבל תשמרו על קשר ;)
                        </FooterLabel>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "center", alignItems: "center" }}>
                        <Link to="/manage/login">
                            <Button type="ghost" style={{ color: "red" }}>
                                כניסת מנהל
                            </Button>
                        </Link>
                    </div>
                </FooterArea>
            </ContentLayoutContainer>
        </ConfigProvider>
    );
}

export default Contact;

