import React from "react";
import { Container } from "@mui/material";
import { Advertisement } from "./Advertisement";
import { ActiveUsers } from "./ActiveUsers";
import Events from "./Events";
import { NewDishes } from "./NewDIshes";
import Statistics from "./Statistics";
import { PopularDishes } from "./PopularDishes";
import "../../../css/home.css";

export default function HomePage() {
  return <div className={"homepage"}>
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers />
    <Events />
  </div>
}