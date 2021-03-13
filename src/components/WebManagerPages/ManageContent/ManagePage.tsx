import { Button, ConfigProvider, Input, Typography, Divider, Select, Modal, List } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { TypedReducers } from '../../Redux/Reducers/index';
import { ChangeIsConnected } from '../../Redux/Actions/GeneralActions';

const ContentContainer = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 500px;
        min-height: 800px;
    }
`;

const HeaderArea = styled.div`
    display: flex;
    font-size: 20px;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
        width: 500px;
        margin-top: 10px;
        margin-bottom: 30px;
    }
`;

const ManageArea = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 500px;
        height: 800px;
    }
`;

const RequestsArea = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 500px;
        /* height: 800px; */
    }
`;

const FormLine = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        
    }
`;

const FormLabelInputContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 576px) {  // On Mobile

    }

    @media only screen and (min-width: 577px) {  // On Computer

    }
`;

const FormLabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e6f2ff;
    border-radius: 5px;
    font-size: 16px;

    @media only screen and (max-width: 576px) {  // On Mobile
        width: 90%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        width: 150px;
        height: 90%;
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

const FormButton = styled(Button)`
    border-radius: 5px;
    color: black;

    @media only screen and (max-width: 576px) {  // On Mobile
        width: 90%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        height: 90%;
        /* align-self: stretch; */
    }
`;

const FormDivider = styled(Divider)`
    margin-top: 20px;
    margin-bottom: 20px;
    height: 3px;
    background-color: purple;
`;

const RequestListArea = styled.div`
    width: 100%;

    @media only screen and (max-width: 576px) {  // On Mobile
        
    }

    @media only screen and (min-width: 577px) {  // On Computer
        
    }
`;

const ManagePage = () => {

    const baseURL = useSelector((state: TypedReducers) => state.generalReducer.baseURL);
    const dispatch = useDispatch();

    interface Request {
        _id: string;
        fullName: string;
        email: string;
        phone: string;
        request: string;
    }

    const onLogOut = () => {
        dispatch(ChangeIsConnected(false)); // log out user
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // REQUESTS

    const [showRequests, setShowRequests] = useState(false); // true = show requests, false = show manage
    const [requestsToShow, setRequestsToShow] = useState<Request[]>([]); // List of Requests

    const reloadRequests = useCallback(
        () => {
            axios.get<Request[]>(baseURL + "/get/requests", {}).then((result) => {
                if (result) {
                    setRequestsToShow(result.data);
                }
                else {
                    Modal.info({
                        title: "שגיאה ברשת",
                        content: "אירעה שגיאה בקבלת נתונים. נסו לרענן את העמוד בדקות הקרובות, תודה :)",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
            });
        }
    , [baseURL]);

    const onDeleteRequest = (id: string) => {
        Modal.confirm({
            title: "פעולה זו תמחק את הפנייה",
            content: "האם אתם בטוחים ?",
            style: {
                direction: "rtl"
            },
            onOk: () => {
                axios.post(baseURL + "/delete/request", { _id: id }).then((result) => {
                    if (result.data) {
                        reloadRequests();
                        Modal.info({
                            title: "הפנייה נמחקה בהצלחה",
                            content: "",
                            style: {
                                direction: "rtl"
                            }
                        });
                    }
                    else {
                        Modal.info({
                            title: "לא היה ניתן למחוק את הפנייה",
                            content: "יש לנסות שוב.",
                            style: {
                                direction: "rtl"
                            }
                        });
                    }
                });
            }
        });
    }

    const onReplyRequest = () => {
        console.log("reply");
        
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ADD CATEGORY

    const [categoryToAdd, setCategoryToAdd] = useState("");

    const addCategoryButton = () => {
        if (categoryToAdd.length === 0) {
            Modal.info({
                title: "יש לרשום שם קטגוריה",
                content: "ולנסות שוב.",
                style: {
                    direction: "rtl"
                }
            });
        }
        else {
            axios.post(baseURL + "/add/category", { name: categoryToAdd }).then((result) => {
                if (result.data) {
                    setCategoryToAdd("");
                    reloadcategoryToDelete();
                    Modal.info({
                        title: "הקטגוריה נוספה בהצלחה",
                        content: "",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
                else {
                    Modal.info({
                        title: "לא היה ניתן להוסיף את הקטגוריה",
                        content: "יש לנסות שוב.",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
            });
        }
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // DELETE CATEGORY

    interface Category {
        _id: string;
        name: string;
    }

    const [categoriesToDelete, setCategoriesToDelete] = useState<Category[]>([]);
    const [selectedCategoryToDelete, setSelectedCategoryToDelete] = useState<Category>({ _id: "", name: "" });

    const reloadcategoryToDelete = useCallback(
        () => {
            axios.get<Category[]>(baseURL + "/get/categories", {}).then((result) => {
                if (result) {
                    setCategoriesToDelete(result.data);
                    setProductCategoryToAdd(result.data);
                    setProductCategoryToDelete(result.data);
                }
                else {
                    Modal.info({
                        title: "שגיאה ברשת",
                        content: "אירעה שגיאה בקבלת נתונים. נסו לרענן את העמוד בדקות הקרובות, תודה :)",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
            });
        }
        , [baseURL]);

    const onSelectCategoryToDelete = (value: Category) => {
        setSelectedCategoryToDelete(value);
    }

    const deleteCategoryButton = () => {
        if (selectedCategoryToDelete.name.length === 0) {
            Modal.info({
                title: "נא לבחור קטגוריה",
                content: "ולנסות שוב.",
                style: {
                    direction: "rtl"
                }
            });
        }
        else if (selectedCategoryToDelete.name.localeCompare("מבצעים") === 0 || selectedCategoryToDelete.name.localeCompare("חדש") === 0) {
            Modal.info({
                title: "לא ניתן למחוק את הקטגוריות מבצעים ו/או חדש, הם חלק מהאתר.",
                content: "ניתן למחוק ו/או להוסיף מוצרים לקטגוריות הללו.",
                style: {
                    direction: "rtl"
                }
            });
        }
        else {
            Modal.confirm({
                title: "פעולה זו תמחק את הקטגוריה.",
                content: "האם אתם בטוחים ?",
                style: {
                    direction: "rtl"
                },
                onOk: () => {
                    axios.post<Category[]>(baseURL + "/delete/category", { _id: selectedCategoryToDelete._id }).then((result) => {
                        if (result.data) {
                            Modal.info({
                                title: "המחיקה הושלמה",
                                content: "",
                                style: {
                                    direction: "rtl"
                                }
                            });
                            reloadcategoryToDelete();
                            setSelectedCategoryToDelete({ _id: "", name: "" });
                            setSelectedProductCategoryToAdd({ _id: "", name: "" });
                            setSelectedProductNameToDelete({ _id: "", name: "", category: { _id: "", name: "" }, description: "", link: "", picture: "" });
                            setProductNameToDeleteAccordingToCategory([]);
                            setSelectedProductCategoryToDelete({ _id: "", name: "" });
                        }
                        else {
                            Modal.info({
                                title: "המחיקה נכשלה",
                                content: "לא היה ניתן למחוק את הקטגוריה.",
                                style: {
                                    direction: "rtl"
                                }
                            });
                        }
                    });
                }
            });
        }
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // ADD PRODUCT

    const [productNameToAdd, setProductNameToAdd] = useState("");
    const [productCategoryToAdd, setProductCategoryToAdd] = useState<Category[]>([]);
    const [selectedProductCategoryToAdd, setSelectedProductCategoryToAdd] = useState<Category>({ _id: "", name: "" });
    const [productDescriptionToAdd, setProductDescriptionToAdd] = useState("");
    const [productLinkToAdd, setProductLinkToAdd] = useState("");
    const [productPictureToAdd, setProductPictureToAdd] = useState("");

    const onSelectProductCategoryToAdd = (value: Category) => {
        setSelectedProductCategoryToAdd(value);
    }

    const addProductButton = () => {
        if (productNameToAdd.length === 0 || selectedProductCategoryToAdd.name.length === 0 || productDescriptionToAdd.length === 0 || productLinkToAdd.length === 0 || productPictureToAdd.length === 0) {
            Modal.info({
                title: "יש למלא את השדות",
                content: "ולנסות שוב.",
                style: {
                    direction: "rtl"
                }
            });
        }
        else {
            axios.post(baseURL + "/add/product", { name: productNameToAdd, category: selectedProductCategoryToAdd, description: productDescriptionToAdd, link: productLinkToAdd, picture: productPictureToAdd }).then((result) => {
                if (result.data) {
                    reloadProductToDelete();
                    setProductNameToAdd("");
                    setSelectedProductCategoryToAdd({ _id: "", name: "" });
                    setProductDescriptionToAdd("");
                    setProductLinkToAdd("");
                    setProductPictureToAdd("");
                    Modal.info({
                        title: "המוצר נוסף בהצלחה",
                        content: "",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
                else {
                    Modal.info({
                        title: "לא היה ניתן להוסיף את המוצר",
                        content: "יש לנסות שוב.",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
            });
        }
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // DELETE PRODUCT

    interface Product {
        _id: string;
        name: string;
        category: {
            _id: string;
            name: string;
        }
        description: string;
        link: string;
        picture: string;
    }

    const [productNameToDelete, setProductNameToDelete] = useState<Product[]>([]);
    const [selectedProductNameToDelete, setSelectedProductNameToDelete] = useState<Product>({ _id: "", name: "", category: { _id: "", name: "" }, description: "", link: "", picture: "" });
    const [productNameToDeleteAccordingToCategory, setProductNameToDeleteAccordingToCategory] = useState<Product[]>([]);
    const [productCategoryToDelete, setProductCategoryToDelete] = useState<Category[]>([]);
    const [selectedProductCategoryToDelete, setSelectedProductCategoryToDelete] = useState<Category>({ _id: "", name: "" });

    const reloadProductToDelete = useCallback(
        () => {
            axios.get<Product[]>(baseURL + "/get/products", {}).then((result) => {
                if (result) {
                    setProductNameToDelete(result.data);
                }
                else {
                    Modal.info({
                        title: "שגיאה ברשת",
                        content: "אירעה שגיאה בקבלת נתונים. נסו לרענן את העמוד בדקות הקרובות, תודה :)",
                        style: {
                            direction: "rtl"
                        }
                    });
                }
            });
        }
        , [baseURL]);

    const onSelectProductNameToDelete = (value: Product) => {
        setSelectedProductNameToDelete(value);
    }

    const onSelectProductCategoryToDelete = (category: Category) => {
        setSelectedProductCategoryToDelete(category);
        reloadProductToDelete();

        if (category.name.length > 0) {
            setProductNameToDeleteAccordingToCategory(productNameToDelete.filter((value, index) => value.category.name.localeCompare(category.name) === 0));
            setSelectedProductNameToDelete({ _id: "", name: "", category: { _id: "", name: "" }, description: "", link: "", picture: "" });
        }
    }

    const deleteProductButton = () => {
        if (selectedProductNameToDelete.name.length === 0 || selectedProductCategoryToDelete.name.length === 0) {
            Modal.info({
                title: "יש לבחור שם וקטגוריה",
                content: "ולנסות שוב.",
                style: {
                    direction: "rtl"
                }
            });
        }
        else {
            Modal.confirm({
                title: "פעולה זו תמחק את המוצר",
                content: "האם אתם בטוחים ?",
                style: {
                    direction: "rtl"
                },
                onOk: () => {
                    axios.post(baseURL + "/delete/product", { _id: selectedProductNameToDelete._id, category: selectedProductCategoryToDelete }).then((result) => {
                        if (result.data) {
                            reloadProductToDelete();
                            setProductNameToDeleteAccordingToCategory([]);
                            setSelectedProductNameToDelete({ _id: "", name: "", category: { _id: "", name: "" }, description: "", link: "", picture: "" });
                            setSelectedProductCategoryToDelete({ _id: "", name: "" });
                            Modal.info({
                                title: "המוצר נמחק בהצלחה",
                                content: "",
                                style: {
                                    direction: "rtl"
                                }
                            });
                        }
                        else {
                            Modal.info({
                                title: "לא היה ניתן למחוק את המוצר",
                                content: "יש לנסות שוב.",
                                style: {
                                    direction: "rtl"
                                }
                            });
                        }
                    });
                }
            });
        }
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    useEffect(() => {
        reloadcategoryToDelete();
        reloadProductToDelete();
        reloadRequests();
    }, [reloadcategoryToDelete, reloadProductToDelete, reloadRequests]);



    return (
        <ContentContainer>
            <HeaderArea>
                <ConfigProvider direction="rtl">
                    <Typography.Text>
                        שלום מנהל !
                    </Typography.Text>
                    <Button type="primary" danger size="large" onClick={() => { onLogOut() }}>
                        התנתק
                    </Button>
                </ConfigProvider>
            </HeaderArea>

            <Divider style={{ backgroundColor: "purple" }}></Divider>

            {
                showRequests ?
                    <RequestsArea>
                        <ConfigProvider direction="rtl">
                            <RequestListArea>
                                <List
                                dataSource={requestsToShow}
                                itemLayout="vertical"
                                style={{
                                    width: "100%"
                                }}
                                pagination={{
                                    pageSize: 3
                                }}
                                renderItem={(item) => (
                                    <List.Item
                                    key={item._id}
                                    style={{ fontSize: "18px", backgroundColor: "rgba(167, 190, 199, 0.5)", borderRadius: "20px", margin: "10px", padding: "10px" }}
                                    actions={[
                                        <Button danger type="primary" size="small" onClick={()=>{ onDeleteRequest(item._id) }}>מחק</Button>,
                                        <Button type="primary" size="small" href={`mailto:${item.email}`} onClick={()=>{ onReplyRequest() }}>השב</Button>
                                    ]}
                                    >
                                        <List.Item.Meta
                                        title={<div style={{ fontSize: "22px" }}>{item.fullName}</div>}
                                        description={<div style={{ fontSize: "16px" }}><div>טלפון : {item.phone}</div><div>אימייל : {item.email}</div></div>}
                                        >
                                        </List.Item.Meta>
                                        {item.request}
                                    </List.Item>
                                )}
                                >

                                </List>
                            </RequestListArea>
                        </ConfigProvider>
                        <Button style={{ margin: "20px" }} type="primary" size="large" onClick={() => { setShowRequests(false) }}>חזור לדף ניהול</Button>
                    </RequestsArea>

                    :

                    <ManageArea>
                        <FormLine>
                            <FormLabelContainer>
                                <Typography.Text style={{ color: "#0052cc" }}>
                                    הוסף קטגוריה
                                </Typography.Text>
                            </FormLabelContainer>
                            <FormLabelInputContainer>
                                <ConfigProvider direction="rtl">
                                    <FormLabel>
                                        שם :
                                    </FormLabel>
                                    <Input placeholder="שם" style={{ width: "auto", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onChange={(event) => { setCategoryToAdd(event.target.value) }} value={categoryToAdd}></Input>
                                </ConfigProvider>
                            </FormLabelInputContainer>
                            <FormButton type="primary" size="large" onClick={() => { addCategoryButton() }}>הוסף</FormButton>
                        </FormLine>

                        <FormDivider></FormDivider>

                        <FormLine>
                            <FormLabelContainer>
                                <Typography.Text style={{ color: "#cc2900" }}>
                                    מחק קטגוריה
                                </Typography.Text>
                            </FormLabelContainer>
                            <FormLabelInputContainer>
                                <ConfigProvider direction="rtl">
                                    <FormLabel>
                                        קטגוריה :
                                    </FormLabel>
                                    <Select value={selectedCategoryToDelete.name} style={{ width: "180px", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onSelect={(value, option) => { onSelectCategoryToDelete(option.categoryobject) }}>
                                        {categoriesToDelete.map((value, index) => {
                                            return <Select.Option categoryobject={value} value={value.name} key={value._id}>{value.name}</Select.Option>;
                                        })}
                                    </Select>
                                </ConfigProvider>
                            </FormLabelInputContainer>
                            <FormButton type="primary" danger size="large" style={{ color: "black" }} onClick={() => { deleteCategoryButton() }}>מחק</FormButton>
                        </FormLine>

                        <FormDivider></FormDivider>

                        <FormLine>
                            <FormLabelContainer>
                                <Typography.Text style={{ color: "#009900" }}>
                                    הוסף מוצר
                                </Typography.Text>
                            </FormLabelContainer>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <FormLabelInputContainer>
                                    <ConfigProvider direction="rtl">
                                        <FormLabel>
                                            שם :
                                        </FormLabel>
                                        <Input placeholder="שם" style={{ width: "auto", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onChange={(event) => { setProductNameToAdd(event.target.value) }} value={productNameToAdd}></Input>
                                    </ConfigProvider>
                                </FormLabelInputContainer>
                                <FormLabelInputContainer>
                                    <ConfigProvider direction="rtl">
                                        <FormLabel>
                                            קטגוריה :
                                        </FormLabel>
                                        <Select value={selectedProductCategoryToAdd.name} style={{ width: "180px", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onSelect={(value, option) => { onSelectProductCategoryToAdd(option.categoryobject) }}>
                                            {productCategoryToAdd.map((value, index) => {
                                                return <Select.Option categoryobject={value} value={value.name} key={value._id}>{value.name}</Select.Option>;
                                            })}
                                        </Select>
                                    </ConfigProvider>
                                </FormLabelInputContainer>
                                <FormLabelInputContainer>
                                    <ConfigProvider direction="rtl">
                                        <FormLabel>
                                            תיאור :
                                        </FormLabel>
                                        <Input placeholder="תיאור" style={{ width: "auto", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onChange={(event) => { setProductDescriptionToAdd(event.target.value) }} value={productDescriptionToAdd}></Input>
                                    </ConfigProvider>
                                </FormLabelInputContainer>
                                <FormLabelInputContainer>
                                    <ConfigProvider direction="rtl">
                                        <FormLabel>
                                            קישור :
                                        </FormLabel>
                                        <Input placeholder="קישור" style={{ width: "auto", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onChange={(event) => { setProductLinkToAdd(event.target.value) }} value={productLinkToAdd}></Input>
                                    </ConfigProvider>
                                </FormLabelInputContainer>
                                <FormLabelInputContainer>
                                    <ConfigProvider direction="rtl">
                                        <FormLabel>
                                            תמונה :
                                        </FormLabel>
                                        <Input placeholder="תמונה" style={{ width: "auto", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onChange={(event) => { setProductPictureToAdd(event.target.value) }} value={productPictureToAdd}></Input>
                                    </ConfigProvider>
                                </FormLabelInputContainer>
                            </div>
                            <FormButton type="primary" size="large" onClick={() => { addProductButton() }}>הוסף</FormButton>
                        </FormLine>

                        <FormDivider></FormDivider>

                        <FormLine>
                            <FormLabelContainer>
                                <Typography.Text style={{ color: "#cc2900" }}>
                                    מחק מוצר
                                </Typography.Text>
                            </FormLabelContainer>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <FormLabelInputContainer>
                                    <ConfigProvider direction="rtl">
                                        <FormLabel>
                                            שם :
                                        </FormLabel>
                                        <Select value={selectedProductNameToDelete.name} style={{ width: "180px", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onSelect={(value, option) => { onSelectProductNameToDelete(option.categoryobject) }}>
                                            {productNameToDeleteAccordingToCategory.map((value, index) => {
                                                return <Select.Option categoryobject={value} value={value.name} key={value._id}>{value.name}</Select.Option>;
                                            })}
                                        </Select>
                                    </ConfigProvider>
                                </FormLabelInputContainer>
                                <FormLabelInputContainer>
                                    <ConfigProvider direction="rtl">
                                        <FormLabel>
                                            קטגוריה :
                                        </FormLabel>
                                        <Select value={selectedProductCategoryToDelete.name} style={{ width: "180px", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onSelect={(value, option) => { onSelectProductCategoryToDelete(option.categoryobject) }}>
                                            {productCategoryToDelete.map((value, index) => {
                                                return <Select.Option categoryobject={value} value={value.name} key={value._id}>{value.name}</Select.Option>;
                                            })}
                                        </Select>
                                    </ConfigProvider>
                                </FormLabelInputContainer>
                            </div>
                            <FormButton type="primary" danger size="large" style={{ color: "black" }} onClick={() => { deleteProductButton() }}>מחק</FormButton>
                        </FormLine>

                        <FormDivider></FormDivider>

                        <FormLine>
                            <Button size="large" style={{ backgroundColor: "lightseagreen", borderRadius: "20px", width: "100%", color: "black", marginBottom: "20px" }} onClick={() => { setShowRequests(true) }}>צפה בפניות לאתר ({requestsToShow.length})</Button>
                        </FormLine>

                    </ManageArea>
            }


        </ContentContainer>
    );
}

export default ManagePage;

