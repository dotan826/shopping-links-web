import React from 'react';
import { Layout, ConfigProvider, Typography, Image } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './MainWebPage.css';

import MyDrawBag from '../../Svg/svgComponents/MyDrawTest';

import wallPicture from '../../Images/wall.jpg';
import bagsPicture from '../../Images/bagsFadeSmallSize.png';

import salesIcon from '../../Svg/003-discount.svg';
import newItemsIcon from '../../Svg/004-hot deal.svg';
import categoryIcon from '../../Svg/011-online shopping.svg';
import contactIcon from '../../Svg/045-promotion.svg';

const { Content, Footer } = Layout;

const LayoutContainer = styled(Layout)`
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0.5) 100%), url(${wallPicture});
    background-size: 100% 100%; // width height (in this order...)


    /* position: relative; */
    /* &::before{
        content: "";
        background-image: url(${wallPicture});
        background-size: 100% 100%; // width height (in this order...)
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        opacity: 0.5;
    } */
`;

const ContentContainer = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const FooterContainer = styled(Footer)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

`;

const InnerContentContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-around;

      width: 300px;
      min-height: 80vh;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 700px;
        height: 700px;
    }
`;

const BagsImage = styled(Image)`

    @media only screen and (max-width: 576px) {  // On Mobile
      width: 220px;
        margin: 15px;
    }

    @media only screen and (min-width: 577px) {  // On Computer
      width: 400px;
      
    }
`;

const MenuAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    @media only screen and (max-width: 576px) {  // On Mobile
      margin: 20px;

    }

    @media only screen and (min-width: 577px) {  // On Computer
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

const MenuIconsTextAreaContainer = styled(motion.div)`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 20px;

    & > * {
        margin: 10px;
    }

    @media only screen and (max-width: 576px) {  // On Mobile
      

    }

    @media only screen and (min-width: 577px) {  // On Computer
        
      
    }
`;

const MainWebPage = () => {
    return (
        <LayoutContainer>
            <ConfigProvider direction="rtl">
                <ContentContainer>
                    <InnerContentContainer>
                        <div>
                            <BagsImage src={bagsPicture} preview={false}></BagsImage>
                        </div>
                        <MenuAreaContainer>

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

                            <Link to="/clients/sale">
                                <MenuIconsTextAreaContainer whileHover={{ backgroundColor: ["rgba(52, 86, 139, 0)", "rgba(52, 86, 139, 0.3)"], borderRadius: "20px" }}  transition={{ duration: 1, ease: "easeInOut" }}>
                                    <MenuIcons preview={false} src={salesIcon}></MenuIcons>
                                    <Typography.Text style={{ color: "#E74C3C" }}>
                                        מבצעים
                                    </Typography.Text>
                                </MenuIconsTextAreaContainer>
                            </Link>

                            <Link to="/clients/new">
                                <MenuIconsTextAreaContainer whileHover={{ backgroundColor: ["rgba(52, 86, 139, 0)", "rgba(52, 86, 139, 0.3)"], borderRadius: "20px" }}  transition={{ duration: 1, ease: "easeInOut" }}>
                                    <MenuIcons preview={false} src={newItemsIcon}></MenuIcons>
                                    <Typography.Text style={{ color: "#009900" }}>
                                        חדש
                                </Typography.Text>
                                </MenuIconsTextAreaContainer>
                            </Link>

                            <Link to="/clients/category">
                                <MenuIconsTextAreaContainer whileHover={{ backgroundColor: ["rgba(52, 86, 139, 0)", "rgba(52, 86, 139, 0.3)"], borderRadius: "20px" }}  transition={{ duration: 1, ease: "easeInOut" }}>
                                    <MenuIcons preview={false} src={categoryIcon}></MenuIcons>
                                    <Typography.Text style={{ color: "#2E86C1" }}>
                                        קטגוריות
                                </Typography.Text>
                                </MenuIconsTextAreaContainer>
                            </Link>

                            <Link to="/clients/contact">
                                <MenuIconsTextAreaContainer whileHover={{ backgroundColor: ["rgba(52, 86, 139, 0)", "rgba(52, 86, 139, 0.3)"], borderRadius: "20px" }}  transition={{ duration: 1, ease: "easeInOut" }}>
                                    <MenuIcons preview={false} src={contactIcon}></MenuIcons>
                                    <Typography.Text>
                                        צור קשר
                                </Typography.Text>
                                </MenuIconsTextAreaContainer>
                            </Link>

                        </MenuAreaContainer>
                    </InnerContentContainer>
                </ContentContainer>
                <FooterContainer>
                    <Typography.Text style={{ textAlign: "center" }}>
                        כל מה שרציתם במקום אחד... מקבלים פתרונות, חוסכים זמן חיפוש ומקבלים הפנייה להמשך קנייה !
                        <Typography.Link href="https://www.redboxteams.com/" target="_blank"> Dotan </Typography.Link>
                    </Typography.Text>
                </FooterContainer>
            </ConfigProvider>
        </LayoutContainer>
    );
}



export default MainWebPage;

