import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = function ( state: AppRootState ) { 
   return state.homePage
};

export const retrievePopularDishes = createSelector(selectHomePage, (HomePage) => HomePage.popularDishes)
                                                // input-selector
// agar selectHomePage() qilsak, ikkinchi argumentdagi functiondan 
// chiqib ketib 4 - satrdagi functionni yurgizadi. 

export const retrieveNewDishes = createSelector(selectHomePage, (HomePage) => HomePage.newDishes)
export const retrieveTopUsers = createSelector(selectHomePage, (HomePage) => HomePage.topUsers)