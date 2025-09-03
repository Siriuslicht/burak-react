import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Advertisement } from "./Advertisement";
import { ActiveUsers } from "./ActiveUsers";
import Events from "./Events";
import { NewDishes } from "./NewDIshes";
import Statistics from "./Statistics";
import { PopularDishes } from "./PopularDishes";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/Product.service";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/Member.service";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});
// dispatch storega actionni joylaydigan function

export default function HomePage() {
   /** Run qilinganda Frontga Env-Varlar yuklanadi!!! */
  console.log("Back Url:", process.env.REACT_APP_API_URL);
  /** => Lib faylini ichidan React projectining configurationini hosil qilish kerak!!! */

  const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(useDispatch());
  /**
   * const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());
      You’re also calling setTopUsers inside useEffect, but you never actually pulled it out of actionDispatch.
      So setTopUsers is undefined when you call it — that’s why nothing gets dispatched to Redux, and ActiveUsers ends up with an empty array.
   */

  useEffect(() => {
     const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productView",
      productCollection: ProductCollection.DISH,
    }).then(data => {
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

    const member = new MemberService();
    member.getTopUsers().then(data => {
      setTopUsers(data);
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



