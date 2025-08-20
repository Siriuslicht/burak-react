import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
   homaPage: HomePageState;
}

export interface HomePageState {
   PopularDishes: Product[];
   newDishes: Product[];
   topUsers: Member[];
}