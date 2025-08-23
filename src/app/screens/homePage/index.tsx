import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Advertisement } from "./Advertisement";
import { ActiveUsers } from "./ActiveUsers";
import Events from "./Events";
import { NewDishes } from "./NewDIshes";
import Statistics from "./Statistics";
import { PopularDishes } from "./PopularDishes";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setNewDishes, setPopularDishes } from "./slice";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/Product.service";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});


export default function HomePage() {
   /** Run qilinganda Frontga Env-Varlar yuklanadi!!! */
  console.log("Back Url:", process.env.REACT_APP_API_URL);
  /** => Lib faylini ichidan React projectining configurationini hosil qilish kerak!!! */

  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());

  useEffect(() => {
     const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productView",
      productCollection: ProductCollection.DISH,
    }).then(data => {
      console.log("data passed here:", data)
      setPopularDishes(data);
    }).catch(err => console.log(err));
     
    product.getProducts({
      page: 1, 
      limit: 4,
      order: "createdAt",
      // productCollection: ProductCollection.DISH,
    }).then(data => {
      setNewDishes(data);
    }).catch(err => console.log(err));
}, []);

  return <div className={"homepage"}>
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers />
    <Events />
  </div>
}



