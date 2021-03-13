
import * as appTypes from '../Actions/types';
import * as actionConstants from '../Actions/actionConstants';
import { GeneralActionTypes } from '../Actions/actionCreator';

const initialState: appTypes.GeneralState = {
    baseURL: "http://localhost:3080",             // For Testing Only ! - when in Production change back to >>> "" (empty string!)
    // baseURL: "",
    currentActivePage: appTypes.Page.Main,
    userID: "123",
    isConnected: false,

    categoryName: "",
    productName: "",
    productCategoryName: "",
    productDescription: "",
    productLink: "",
    productPicture: "",

    searchField: "",
    categorySelected: "",

};


const generalReducer = (state = initialState, action: GeneralActionTypes): appTypes.GeneralState => {
    switch (action.type) {
        case actionConstants.CHANGE_PAGE:
            return { ...state, currentActivePage: action.payload };
        case actionConstants.CHANGE_USER_ID:
            return { ...state, userID: action.payload };
        case actionConstants.CHANGE_IS_CONNECTED:
            return { ...state, isConnected: action.payload };
        case actionConstants.CHANGE_CATEGORY_NAME:
            return { ...state, categoryName: action.payload };
        case actionConstants.CHANGE_PRODUCT_NAME:
            return { ...state, productName: action.payload };
        case actionConstants.CHANGE_PRODUCT_CATEGORY_NAME:
            return { ...state, productCategoryName: action.payload };
        case actionConstants.CHANGE_PRODUCT_DESCRIPTION:
            return { ...state, productDescription: action.payload };
        case actionConstants.CHANGE_PRODUCT_LINK:
            return { ...state, productLink: action.payload };
        case actionConstants.CHANGE_PRODUCT_PICTURE:
            return { ...state, productPicture: action.payload };
        case actionConstants.CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        case actionConstants.CHANGE_CATEGORY_SELECTED:
            return { ...state, categorySelected: action.payload };
        default:
            return state;
    }
}

export default generalReducer;
// export default const useTypedSelector: TypedUseSelectorHook<appTypes.GeneralState> = useSelector;

