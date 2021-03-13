import React, { useEffect } from 'react';
import { Layout, Typography, ConfigProvider } from 'antd';
import styled from 'styled-components';
import './WebManagePage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TypedReducers } from '../Redux/Reducers/index';

import MyDrawBag from '../../Svg/svgComponents/MyDrawTest';

import wallPicture from '../../Images/wall.jpg';

import LoginPage from './ManageContent/LoginPage';
import ManagePage from './ManageContent/ManagePage';

const { Content } = Layout;

const LayoutContainer = styled(Layout)`
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0.5) 100%), url(${wallPicture});
    background-size: 100% 100%; // width height (in this order...)
    
`;

const ContentContainer = styled(Content)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const InnerContentContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

      width: 300px;
      min-height: 80vh;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 700px;
        min-height: 600px;
    }
`;

const WebManagePage = () => {

    const isConnected = useSelector((state: TypedReducers) => state.generalReducer.isConnected); // current login status

    useEffect(() => {

    }, []);

    return (
        <LayoutContainer>
            <ContentContainer>
                <InnerContentContainer>
                    <ConfigProvider direction="rtl">
                        <Link to="/">
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "10px" }}>
                                {/* <Image preview={false} src={ShoppingBag} style={{ maxWidth: "100px" }}></Image> */}
                                <div style={{ width: "100px", height: "auto" }}>
                                    <MyDrawBag></MyDrawBag>
                                </div>
                                <Typography.Text style={{ fontSize: "25px", fontFamily: "DanaYadAlefAlefAlef-Normal", fontWeight: "bold" }}>
                                    קניות עושים במוג׳ו !
                                </Typography.Text>
                            </div>
                        </Link>
                    </ConfigProvider>

                    {
                        isConnected ?
                        <ManagePage></ManagePage> :
                        <LoginPage></LoginPage>
                    }

                </InnerContentContainer>
            </ContentContainer>
        </LayoutContainer>
    );
}

export default WebManagePage;

