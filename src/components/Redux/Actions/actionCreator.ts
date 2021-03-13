
/**
 * Redux Action Creator Interfaces
 * 
 *  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

import * as actionConstants from './actionConstants';   // Action Constants
import { Page } from './types';                         // Types

interface ChangePageAction {
    type: typeof actionConstants.CHANGE_PAGE;
    payload: Page;
}

interface ChangeUserIDAction {
    type: typeof actionConstants.CHANGE_USER_ID;
    payload: string;
}

interface ChangeIsConnected {
    type: typeof actionConstants.CHANGE_IS_CONNECTED;
    payload: boolean;
}

interface ChangeCategoryNameAction {
    type: typeof actionConstants.CHANGE_CATEGORY_NAME;
    payload: string;
}

interface ChangeProductNameAction {
    type: typeof actionConstants.CHANGE_PRODUCT_NAME;
    payload: string;
}

interface ChangeProductCategoryNameAction {
    type: typeof actionConstants.CHANGE_PRODUCT_CATEGORY_NAME;
    payload: string;
}

interface ChangeProductDescriptionAction {
    type: typeof actionConstants.CHANGE_PRODUCT_DESCRIPTION;
    payload: string;
}

interface ChangeProductLinkAction {
    type: typeof actionConstants.CHANGE_PRODUCT_LINK;
    payload: string;
}

interface ChangeProductPictureAction {
    type: typeof actionConstants.CHANGE_PRODUCT_PICTURE;
    payload: string;
}

interface ChangeSearchFieldAction {
    type: typeof actionConstants.CHANGE_SEARCH_FIELD;
    payload: string;
}

interface ChangeCategorySelectedAction {
    type: typeof actionConstants.CHANGE_CATEGORY_SELECTED;
    payload: string;
}

export type GeneralActionTypes = ChangePageAction | ChangeUserIDAction | ChangeCategoryNameAction | ChangeProductNameAction | 
                                    ChangeProductCategoryNameAction | ChangeProductDescriptionAction | ChangeProductLinkAction |
                                    ChangeProductPictureAction | ChangeSearchFieldAction | ChangeCategorySelectedAction | 
                                    ChangeIsConnected;

/**
 *  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

