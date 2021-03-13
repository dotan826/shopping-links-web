import React from 'react';
import { ConfigProvider, Layout, Typography, Button } from 'antd';
import styled from 'styled-components';
import './WebClientsPage.css';
import { Switch, Route, Link, useHistory } from 'react-router-dom';

import ContentPages from './ClientsContent/ContentPages';
// import New from './ClientsContent/New';
// import Category from './ClientsContent/Category';
import Contact from './ClientsContent/Contact';

import MyDrawBag from '../../Svg/svgComponents/MyDrawTest';

import wallPicture from '../../Images/wall.jpg';
import colorsPicture from '../../Images/colors.jpg';

import salesIcon from '../../Svg/003-discount.svg'
import newItemsIcon from '../../Svg/004-hot deal.svg';
import categoryIcon from '../../Svg/011-online shopping.svg';

const { Content } = Layout;

const LayoutContainer = styled(Layout)`
    /* background-image: url(${colorsPicture}); */
    /* background-size: 100%; // width height (in this order...) */
    background-position: center;
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
    flex-direction: column;
    min-height: 80vh;

    @media only screen and (max-width: 576px) {  // On Mobile
        width: 300px;

    }

    @media only screen and (min-width: 577px) {  // On Computer


    }
`;

const PageHeader = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
        width: 700px;
        min-height: 150px;
    }
`;

const PageButtonsArea = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
        width: 500px;
        min-height: 100%;
    }
`;

const PageContent = styled.div`
    display: flex;


    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
        justify-content: center;
        align-items: center;
        min-height: 600px;
    }
`;

const PageButton = styled(Button)`
    
    padding: 0px;
    border: solid 1px;
    min-width: 100px;
    min-height: 35px;
    border-radius: 5px;
    font-size: 20px;
    background-color: transparent;

    &:hover{
        background-color: rgba(52, 86, 139, 0.3);
    }
    &:focus{
        background-color: rgba(52, 86, 139, 0.3);
    }

    @media only screen and (max-width: 576px) {  // On Mobile
        margin: 10px;
    }

    @media only screen and (min-width: 577px) {  // On Computer

    }
`;

const WebClientsPage = () => {
    const salePage = { name: "מבצעים", icon: salesIcon, fontColor: "#E74C3C" };
    const newPage = { name: "חדש", icon: newItemsIcon, fontColor: "#009900" };
    const categoryPage = { name: "קטגוריות", icon: categoryIcon, fontColor: "#2E86C1" };

    const history = useHistory();

    return (
        <LayoutContainer>
            <ContentContainer>
                <InnerContentContainer>
                    <PageHeader>
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
                        <PageButtonsArea>
                            <PageButton style={{ color: "#E74C3C", borderColor: "black" }} onClick={() => { history.push("/clients/sale") }}>מבצעים</PageButton>
                            <PageButton style={{ color: "#009900", borderColor: "black" }} onClick={() => { history.push("/clients/new") }}>חדש</PageButton>
                            <PageButton style={{ color: "#2E86C1", borderColor: "black" }} onClick={() => { history.push("/clients/category") }}>קטגוריות</PageButton>
                            <PageButton style={{ color: "black", borderColor: "black" }} onClick={() => { history.push("/clients/contact") }}>צור קשר</PageButton>
                        </PageButtonsArea>
                    </PageHeader>
                    <PageContent>

                        <Switch>
                            <Route path="/clients/sale">
                                <ContentPages page={salePage}></ContentPages>
                            </Route>
                            <Route path="/clients/new">
                                <ContentPages page={newPage}></ContentPages>
                            </Route>
                            <Route path="/clients/category">
                                <ContentPages page={categoryPage}></ContentPages>
                            </Route>
                            <Route path="/clients/contact">
                                <Contact></Contact>
                            </Route>
                            <Route path="/clients">
                                <ContentPages page={salePage}></ContentPages>
                            </Route>
                        </Switch>

                    </PageContent>
                </InnerContentContainer>
            </ContentContainer>
        </LayoutContainer>
    );
}

export default WebClientsPage;

