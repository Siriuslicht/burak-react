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
import { setPopularDishes } from "./slice";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
)


export default function HomePage() {

   /** Run qilinganda Frontga Env-Varlar yuklanadi!!! */
  console.log("Back Url:", process.env.REACT_APP_API_URL);
  /** => Lib faylini ichidan React projectining configurationini hosil qilish kerak!!! */

  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  useEffect(() => {}, []);

  return <div className={"homepage"}>
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers />
    <Events />
  </div>
}