import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
   homePage: HomePageState,
   productsPage: ProductsPageState,
   ordersPage: OrdersPageState, 
}

/** HOMEPAGE */
export interface HomePageState {
   popularDishes: Product[];
   newDishes: Product[];
   topUsers: Member[];
}

export interface ProductsPageState {
   restaurant: Member | null;
   products: Product[];
   chosenProduct: Product | null;
}

export interface OrdersPageState {
   pausedOrders: Order[];
   processOrders: Order[];
   finishedOrders: Order[];
}