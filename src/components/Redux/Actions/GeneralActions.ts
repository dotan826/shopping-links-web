
/**
 * Redux Action Creators
 * 
 * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

import * as actionConstants from './actionConstants';  // Action Constants
import { GeneralActionTypes } from './actionCreator';    // Action Creators
import { Page } from './types';                        // Types

export const changePage = (page: Page): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_PAGE,
        payload: page
    };
}

export const changeUserID = (userID: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_USER_ID,
        payload: userID
    };
}

export const ChangeIsConnected = (isConnected: boolean): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_IS_CONNECTED,
        payload: isConnected
    };
}

export const changeCategoryName = (category: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_CATEGORY_NAME,
        payload: category
    };
}

export const changeProdutName = (product: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_PRODUCT_NAME,
        payload: product
    };
}

export const changeProductCategoryName = (productCategory: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_PRODUCT_CATEGORY_NAME,
        payload: productCategory
    };
}

export const changeProductDescription = (description: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_PRODUCT_DESCRIPTION,
        payload: description
    };
}

export const changeProductLink = (link: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_PRODUCT_LINK,
        payload: link
    };
}

export const changeProductPicture = (picture: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_PRODUCT_PICTURE,
        payload: picture
    };
}

export const changeSearchField = (searchField: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_SEARCH_FIELD,
        payload: searchField
    };
}

export const changeCategorySelected = (categorySelected: string): GeneralActionTypes => {
    return {
        type: actionConstants.CHANGE_CATEGORY_SELECTED,
        payload: categorySelected
    };
}

/**
 *  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */


















