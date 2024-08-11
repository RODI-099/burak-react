import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import {useDispatch, } from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders} from "./slice";
import "../../../css/order.css";
import { SyntheticEvent, useState } from "react";
import Divider from "../../components/divider";
import { Order } from "../../../lib/types/order";

//  REDUX SLICE & SELECTOR

const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data))
});

export default function OrdersPage() {
  const {setPausedOrders,setProcessOrders, setFinishedOrders } = actionDispatch(useDispatch());
  const [value, setValue] = useState("1");

  // HANDLERS
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className={"order-container"}>
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
                  <Tab
                    style={{ marginRight: 30 }}
                    label="PAUSED ORDERS"
                    value={"1"}
                  />
                  <Tab
                    style={{ marginRight: 30 }}
                    label="PROCESS ORDERS"
                    value={"2"}
                  />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-contents"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Stack className={"user-frame"}>
            <Box className={"user-img-wrapper"}>
              <img src={"/img/justin.webp"} className={"user-img"} />
              <Box className={"person-icon-wrapper"}>
                <PersonIcon
                  className={"person-icon"}
                  style={{ color: "white" }}
                />
              </Box>
            </Box>
            <Box className={"user-name"}>RODI</Box>
            <Box className={"user-type"}>USER</Box>
            <Divider height="2" width="360" bg="rgb(161, 161, 161)" />
            <div className="user-location-wrapper">
              <Box>
                <LocationOnIcon />
              </Box>
              <Box className={"user-address"}>Yeosu, South Korea</Box>
            </div>
          </Stack>

          <Stack className={"payment-frame"}>
            <input
              className={"input"}
              type="text"
              placeholder={"Card number : 5243 4090 2002 7495"}
            />
            <div className="input-wrapper">
              <input
                className={"input input-50"}
                type="text"
                placeholder={"07 / 24"}
              />
              <input
                className={"input input-50"}
                type="text"
                placeholder={"CVV : 010"}
              />
            </div>
            <input
              className={"input"}
              type="text"
              placeholder={"Justin Robertson"}
            />

            <Box className={"cards-wrapper"}>
              <img
                className={"card-img"}
                src="/icons/western-card.svg"
                alt="Western card"
              />
              <img className={"card-img"} src="/icons/master-card.svg" alt="" />
              <img className={"card-img"} src="/icons/paypal-card.svg" alt="" />
              <img className={"card-img"} src="/icons/visa-card.svg" alt="" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}