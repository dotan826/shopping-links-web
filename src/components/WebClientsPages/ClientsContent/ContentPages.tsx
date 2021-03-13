import { Typography, Image, Input, ConfigProvider, Pagination, Modal, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { TypedReducers } from '../../Redux/Reducers/index';

import Item from './Item';

// import salesIcon from '../../../Svg/003-discount.svg'
// import newItemsIcon from '../../../Svg/004-hot deal.svg';
// import categoryIcon from '../../../Svg/011-online shopping.svg';

const ContentLayoutContainer = styled.div`
    display: flex;
    

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        width: 300px;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }
`;

const LeftContent = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: column;
        width: 100%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 500px;
        width: 550px;
    }
`;

const RightContent = styled.div`
    display: flex;

    @media only screen and (max-width: 576px) {  // On Mobile
        justify-content: center;
        align-items: flex-start;
        width: 100%;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 150px;
        min-height: 500px;
        margin-top: 100px;
    }
`;

const HeaderArea = styled.div`
    display: flex;
    // background-color: rgb(255, 160, 122, 0.7);
    border-radius: 15px;
    /* background-color: rgb(211, 211, 211, 0.7);
    border: solid 1px; */

    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 80px;
        margin: 10px;
    }
`;

const ContentArea = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 576px) {  // On Mobile
        justify-content: center;
        align-items: center;
        min-height: 350px;
        width: 300px;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        justify-content: center;
        align-items: center;
        min-height: 400px;
        width: 90%;
    }
`;

const PaginationArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;

    @media only screen and (max-width: 576px) {  // On Mobile
        
    }

    @media only screen and (min-width: 577px) {  // On Computer

    }
`;

const SearchAreaLargeScreen = styled.div`
    display: flex;
    
    @media only screen and (max-width: 576px) {  // On Mobile
        display: none;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const SearchAreaSmallScreen = styled.div`
    display: flex;
    
    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        display: none;
    }
`;

const SearchBox = styled(Input.Search)`
    margin: 10px;
    width: 120px;

`;

interface CategoryAreaLargeScreenProps {
    showme: boolean;
}

const CategoryAreaLargeScreen = styled.div<CategoryAreaLargeScreenProps>`
    display: ${props => props.showme ? "flex" : "none"};
    
    @media only screen and (max-width: 576px) {  // On Mobile
        display: none;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const CategoryAreaSmallScreen = styled.div<CategoryAreaLargeScreenProps>`
    display: ${props => props.showme ? "flex" : "none"};
    
    @media only screen and (max-width: 576px) {  // On Mobile
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (min-width: 577px) {  // On Computer
        display: none;
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

interface props {
    page: {
        name: string;
        icon: any;
        fontColor: string;
    }
}

const ContentPages = (props: props) => {

    const baseURL = useSelector((state: TypedReducers) => state.generalReducer.baseURL);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // PAGE DETAILS

    const [pageName, setPageName] = useState(props.page.name);
    const [pageIconSrc, setPageIconSrc] = useState(props.page.icon);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // CATEGORY LIST

    interface Category {
        _id: string;
        name: string;
    }

    const [categoryList, setCategoryList] = useState<Category[]>([]); // category list
    const [selectedCategory, setSelectedCategory] = useState<Category>({ _id: "", name: "" }); // selected category

    const reloadCategoryList = useCallback(
        () => {
            axios.get<Category[]>(baseURL + "/get/categories", {}).then((result) => {
                if (result) {
                    setCategoryList(result.data);
                    setSelectedCategory(result.data[0]);
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

    const onSelectCategoryToShow = (category: Category) => {
        setSelectedCategory(category);
        setPageNumber(1);

        const temp = productList.filter((value, index) => (value.category.name.localeCompare(category.name) === 0)); // filter only selected category products
        setProductListInSpecificCategory(temp);
        setProductListInSpecificPage(temp.filter((value, index) => index <= pageSize - 1)); // create pagination for selected category products

        setRestoreProductListInSpecificCategory(temp); // backup Selected Category Products for search calculations
        setRestoreProductListInSpecificPage(temp.filter((value, index) => index <= pageSize - 1)); // backup Pagination For Selected Category Products for search calculations
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // PRODUCTS LIST

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

    const [productList, setProductList] = useState<Product[]>([]); // all products
    const [productListInSpecificCategory, setProductListInSpecificCategory] = useState<Product[]>([]); // all products in specific category
    const [productListInSpecificPage, setProductListInSpecificPage] = useState<Product[]>([]); // all products in specific page (also render on page !)
    const pageSize = 4;
    const [pageNumber, setPageNumber] = useState(1); // current active Page Number


    const onPageChange = (page: number) => {
        if (page === 1) {
            setProductListInSpecificPage(productListInSpecificCategory.filter((value, index) => index <= pageSize - 1));
        }
        else {
            const start = pageSize * (page - 1);
            const end = (pageSize * page) - 1;
            setProductListInSpecificPage(productListInSpecificCategory.filter((value, index) => (index >= start && index <= end)));
        }
    }

    const reloadProductList = useCallback(
        () => {
            axios.get<Product[]>(baseURL + "/get/products").then((products) => {
                if (props.page.name.localeCompare("קטגוריות") === 0) { // Category Page
                    setProductList(products.data); // get all products

                    axios.get<Category[]>(baseURL + "/get/categories", {}).then((categories) => {
                        if (categories) {
                            const sortProductsList = products.data.filter((product, index) => product.category.name.localeCompare(categories.data[0].name) === 0); // sort all products in specific category according to page
                            setProductListInSpecificCategory(sortProductsList);
                            setProductListInSpecificPage(sortProductsList.filter((value, index) => index <= pageSize - 1)); // set pagination for these products

                            setRestoreProductListInSpecificCategory(sortProductsList); // backup Selected Category Products for search calculations
                            setRestoreProductListInSpecificPage(sortProductsList.filter((value, index) => index <= pageSize - 1)); // backup Pagination For Selected Category Products for search calculations
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
                else { // Other Pages (Sale, New)
                    const sortProductsList = products.data.filter((value, index) => value.category.name.localeCompare(props.page.name) === 0); // sort all products in specific category according to page
                    setProductList(sortProductsList); // save all products in specific category according to page
                    setProductListInSpecificCategory(sortProductsList);
                    setProductListInSpecificPage(sortProductsList.filter((value, index) => index <= pageSize - 1)); // set pagination for these products

                    setRestoreProductListInSpecificCategory(sortProductsList); // backup Selected Category Products for search calculations
                    setRestoreProductListInSpecificPage(sortProductsList.filter((value, index) => index <= pageSize - 1)); // backup Pagination For Selected Category Products for search calculations
                }
            });
        }
        , [baseURL, props.page.name]);

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // SEARCH BOX

    const [searchWord, setSearchWord] = useState(""); // user's search word
    const [restoreProductListInSpecificCategory, setRestoreProductListInSpecificCategory] = useState<Product[]>([]);
    const [restoreProductListInSpecificPage, setRestoreProductListInSpecificPage] = useState<Product[]>([]);

    const onChangeSearchBox = (searchValue: string) => { // trigger when search box content changes (when user add or remove input data)
        setSearchWord(searchValue); // save search value

        if (searchValue.length === 0) { // if user doesnt search anything OR delete everything from text field
            resetSearch();
        }
        else { // if user search something
            const sortSearchList = restoreProductListInSpecificCategory.filter((value, index) => { // iterate on all products names
                // console.log(value.name + " : ");
                for (let i = 0; i < searchValue.length;) { // iterate on all search word characters
                    if (value.name.charAt(i).toLowerCase() === searchValue.charAt(i).toLowerCase()) { // if they have same characters
                        if (i === searchValue.length - 1) { // if we reach the final character
                            // console.log(" ");
                            // console.log("product : " + value.name + " has these Characters !");
                            // console.log(" ");
                            return true;
                        }
                        i++; // move to the next character in search word
                    }
                    else {
                        break; // if we didn't reach the final character then stop and move to the next product name
                    }
                }
                return false;
            }); // filter names with same starting characters
            setProductListInSpecificCategory(sortSearchList);
            setProductListInSpecificPage(sortSearchList.filter((value, index) => index <= pageSize - 1)); // set pagination for these products
            if(sortSearchList.length > 0){
                setPageNumber(1); // reset page number
            }
            else{
                setPageNumber(0); // reset page number
            }
        }
    }

    const resetSearch = () => {
        setProductListInSpecificCategory(restoreProductListInSpecificCategory); // restore product list in specific category
        setProductListInSpecificPage(restoreProductListInSpecificPage); // restore product list in specific page
        setPageNumber(1); // reset page number
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    useEffect(() => {
        setPageName(props.page.name);
        setPageIconSrc(props.page.icon);
        reloadCategoryList();
        reloadProductList();
        setSearchWord(""); // search word reset
    }, [props.page.name, props.page.icon, reloadProductList, reloadCategoryList]);

    return (

        <ContentLayoutContainer>
            <LeftContent>

                <HeaderArea>

                    <MenuIcons preview={false} src={pageIconSrc} style={{ marginLeft: "10px" }}></MenuIcons>

                    <Typography.Text underline={true} style={{ color: props.page.fontColor, fontSize: "40px", marginRight: "10px" }}>
                        {pageName}
                    </Typography.Text>
                </HeaderArea>
                <ConfigProvider direction="rtl">
                    <SearchAreaSmallScreen>
                        <Typography.Text style={{ fontSize: "18px" }}>
                            חיפוש
                        </Typography.Text>
                        <SearchBox placeholder="חיפוש" value={searchWord} onChange={(event) => { onChangeSearchBox(event.target.value) }} ></SearchBox>
                    </SearchAreaSmallScreen>
                    <CategoryAreaSmallScreen showme={props.page.name.localeCompare("קטגוריות") === 0 ? true : false}>
                        <Typography.Text style={{ fontSize: "18px" }}>
                            קטגוריה
                        </Typography.Text>
                        <Select value={selectedCategory.name} style={{ width: "120px", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onSelect={(value, option) => { onSelectCategoryToShow(option.categoryobject) }}>
                            {categoryList.map((value, index) => {
                                return <Select.Option categoryobject={value} value={value.name} key={value._id}>{value.name}</Select.Option>;
                            })}
                        </Select>
                    </CategoryAreaSmallScreen>
                </ConfigProvider>

                <ContentArea>
                    {productListInSpecificPage.map((value, index) => {
                        return <Item key={value._id} _id={value._id} name={value.name} category={value.category} description={value.description} link={value.link} picture={value.picture}></Item>;
                    })}
                </ContentArea>

                <PaginationArea>
                    <Pagination simple current={pageNumber} pageSize={pageSize} total={productListInSpecificCategory.length} onChange={(page) => { onPageChange(page); setPageNumber(page); }}></Pagination>
                </PaginationArea>

            </LeftContent>
            <RightContent>
                <ConfigProvider direction="rtl">
                    <SearchAreaLargeScreen>
                        <Typography.Text style={{ fontSize: "18px" }}>
                            חיפוש
                        </Typography.Text>
                        <SearchBox placeholder="חיפוש" value={searchWord} onChange={(event) => { onChangeSearchBox(event.target.value) }} ></SearchBox>

                    </SearchAreaLargeScreen>
                    <CategoryAreaLargeScreen showme={props.page.name.localeCompare("קטגוריות") === 0 ? true : false}>
                        <Typography.Text style={{ fontSize: "18px" }}>
                            קטגוריה
                        </Typography.Text>
                        <Select value={selectedCategory.name} style={{ width: "120px", margin: "10px", borderRadius: "5px", fontSize: "16px" }} onSelect={(value, option) => { onSelectCategoryToShow(option.categoryobject) }}>
                            {categoryList.map((value, index) => {
                                return <Select.Option categoryobject={value} value={value.name} key={value._id}>{value.name}</Select.Option>;
                            })}
                        </Select>
                    </CategoryAreaLargeScreen>
                </ConfigProvider>
            </RightContent>
        </ContentLayoutContainer>

    );
}

export default ContentPages;

