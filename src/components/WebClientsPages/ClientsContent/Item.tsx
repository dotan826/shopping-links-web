import React from 'react';
import styled from 'styled-components';
import { ConfigProvider, Image, Typography } from 'antd';

const ItemLayoutContainer = styled.div`
    display: flex;
    border-radius: 15px;
    box-shadow: 10px 10px 50px rgb(255, 255, 255), -10px -10px 50px rgb(255, 255, 255);
    background-color: rgb(173, 216, 230, 0.8);
    margin-top: 15px;
    margin-bottom: 15px;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 90%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 90%;
    }
`;

const ImageArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;

    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
        
    }
`;

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
        margin: 5px;
    }
`;

const ItemName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
        
    }
`;

const DescriptionArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
        
    }
`;

const LinkArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer
        
    }
`;

interface props {
    "_id": string;
    "name": string;
    "category": {
        "_id": string;
        "name": string;
    };
    "description": string;
    "link": string;
    "picture"?: string;

}

const Item = (props: props) => {


    

    return (
        <ConfigProvider direction="rtl">
            <ItemLayoutContainer>
                <ImageArea>
                    <Image width="100px" src={props.picture} style={{ maxHeight: "150px" }}></Image>
                </ImageArea>
                <TextArea>
                    <ItemName>
                        <Typography.Text>
                            {props.name}
                        </Typography.Text>
                    </ItemName>
                    <DescriptionArea>
                        <Typography.Text>
                            {props.description}
                        </Typography.Text>
                    </DescriptionArea>
                    <LinkArea>
                        <Typography.Link href={props.link} target="_blank">
                            קישור (אני רוצה לקנות!)
                        </Typography.Link>
                    </LinkArea>
                </TextArea>
            </ItemLayoutContainer>
        </ConfigProvider>
    );
}


export default Item;


