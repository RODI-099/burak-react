import { Member } from "./member";
import { Product } from "./product";


/** REACT APP STATE */
export interface AppRootState {
    popularDishes: any;
    homePage: HomePageState;
    // productsPage: ProductsPageState;
}
/* HOMEPAGE */
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];

}

/* PRODUCT PAGE */

/* ORDERS PAGE */