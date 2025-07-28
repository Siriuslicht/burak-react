import React from "react";
import { Container, Stack } from "@mui/material";
import { CssVarsProvider, Typography } from "@mui/joy";
import { AspectRatio, Box, CardOverflow } from "@mui/joy";
import Card from "@mui/joy/Card";

const activeUsers = [
   {memberNick: "Martin", memberImage: "/img/martin.webp"},
   {memberNick: "Justin", memberImage: "/img/justin.webp"},
   {memberNick: "Rose", memberImage: "/img/rose.webp"},
   {memberNick: "Nusret", memberImage: "/img/nusret.webp"},
]

export function ActiveUsers() {
   return (
      <div className={"active-users-frame"}>
         <Container>
            <Stack className={"main"}>
               <Box className={"category-title"}>Active Users</Box>
               <Stack className={"cards-frame"}>

                  <CssVarsProvider>
                     {activeUsers.length !== 0 ? (
                        activeUsers.map((ele, index) => {
                           return (
                              <Card key={index} className="card" >
                                 <CardOverflow> 
                                   <AspectRatio ratio="1">
                                      <img src={ele.memberImage} alt="" />
                                   </AspectRatio>
                                </CardOverflow>

                                <Typography className={"member-nickname"}>
                                  {ele.memberNick}
                                </Typography>
                              </Card>
                           )
                        })
                     ) : (
                     <Box className="no-data">No Active Users Yet!</Box>
                     
                     )}
                  </CssVarsProvider>

               </Stack>
            </Stack>
         </Container>
      </div> 
   );
}