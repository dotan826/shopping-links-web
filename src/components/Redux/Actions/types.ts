
/**
 * Redux Types and Initial State
 * 
 *  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

export enum Page {    // every possible page on the site
    Main,
    ManageLogin,
    ManageEdit,
    Sale,
    New,
    Category,
    Contact
};

export interface GeneralState {     // General App State
    baseURL: string;
    currentActivePage: Page;
    userID: string;
    isConnected: boolean;

    categoryName: string;
    productName: string;
    productCategoryName: string;
    productDescription: string;
    productLink: string;
    productPicture: string;

    searchField: string;
    categorySelected: string;
}

/**
 *  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */











