// import React from "react";
// import { Container, Stack, Box, Button } from "@mui/material";
// import TabPanel from "@mui/lab/TabPanel";

// import moment from "moment";

// import { useSelector} from "react-redux";
// import { createSelector } from "reselect";
// import { retrieveProcessOrders } from "./selector";
// import { Product } from "../../../lib/types/product";
// import { ProductCollection } from "../../../lib/enums/product.enum";
// import { Messages, serverApi } from "../../../lib/config";
// import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
// import { useGlobals } from "../../hooks/useGlobals";
// import { T } from "../../../lib/types/common";
// import { OrderStatus } from "../../../lib/enums/order.enum";
// import OrderService from "../../services/OrderService";
// import { sweetErrorHandling } from "../../../lib/sweetAlert";

// //  REDUX SLICE & SELECTOR

//   const processOrdersRetriever = createSelector(retrieveProcessOrders, (processOrders) => ({processOrders}));

//   interface ProcessOrdersProps {
//     setValue: (input: string) => void
//   }

// export default function ProcessOrders(props: ProcessOrdersProps ) {
//   const {setValue} = props;
//   const {authMember, setOrderBuilder} = useGlobals();
//   const {processOrders} = useSelector(processOrdersRetriever);

//   // HANDLERS

// const finishOrderHandler = async (e: T) => {
//     try {
//       if(!authMember) throw new Error(Messages.error2);
//       //PAYMENT PROCESS
//       const orderId = e.target.value;
//       const input: OrderUpdateInput = {orderId: orderId, orderStatus: OrderStatus.FINISH,

//       };


//      const confirmation = window.confirm("Have you received your order")
//      if (confirmation) {
//       const order = new OrderService();
//       await order.updateOrder(input);
//       setValue("3");
//       setOrderBuilder(new Date());
//      }
//     } catch(err) {
//       console.log(err)
//       sweetErrorHandling(err).then()
//     }

//   }

//   return (
//     <TabPanel className={"table-panel"} value={"2"}>
//       {processOrders?.map((order: Order) => {
//         return (
//           <Box key={order._id} className={"order-main-box"}>
//             <Box className={"order-box-scroll"}>
//             {order?.orderItems?.map((item: OrderItem) => {
//                   const product: Product = order.productData.filter((ele: Product) => item.productId === ele._id)[0];
//                   const imagePath = `${serverApi}/${product.productImages[0]}`;
//                 return (
//                   <Box key={item._id
//                   } className={"orders-name-price"}>
//                     <img
//                       src={imagePath}
//                       className={"order-dish-img"}
//                     />
//                     <p className={"title-dish"}>{product.productName}</p>
//                     <Box className={"price-box"}>
//                       <p>${item.itemPrice}</p>
//                       <img
//                         style={{ marginLeft: "5px", marginRight: "5px" }}
//                         src={"/icons/close.svg"}
//                         alt=""
//                       />
//                       <p>{item.itemQuantity}</p>
//                       <img src={"/icons/pause.svg"} alt="" />
//                       <p style={{ marginLeft: "15px" }}>${item.itemQuantity * item.itemPrice}</p>
//                     </Box>
//                   </Box>
//                 );
//               })}
//             </Box>

//             <Box className={"total-price-box"}>
//               <Box className={"box-total"}>
//                 <p className={"box-total-text"}>Produc Price</p>
//                 <p className={"box-total-number"}>${order.orderTotal - order.orderDelivery}</p>
//                 <img
//                   src={"/icons/plus.svg"}
//                   style={{ marginLeft: "20px", marginRight: "20px" }}
//                 />
//                 <p className={"box-total-text"}>Delivery Cost</p>
//                 <p className={"box-total-number"}>${order.orderDelivery}</p>
//                 <img
//                   src={"/icons/pause.svg"}
//                   style={{ marginLeft: "20px", marginRight: "20px" }}
//                 />
//                 <p className={"box-total-text"}>Total</p>
//                 <p className={"box-total-number"}>${order.orderTotal}</p>
//               </Box>

//               <Box className={"buttons-wrapper process-buttons"}>
//                 <p className={"data"}>{moment().format("YY:MM:DD HH:mm")}</p>
//                 <Button value={order._id}
//                 variant={"contained"} 
//                 className={"process-button"}
//                 onClick={finishOrderHandler}>
//                   VERIFY TO FULFIL
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         );
//       })}
//         {!processOrders || (processOrders.length === 0 && (
//           <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
//             <img
//               src={"/icons/noimage-list.svg"}
//               alt=""
//               style={{ width: 300, height: 300 }}
//             />
//           </Box>
//         ))}
//     </TabPanel>
//   );
// }

import React from "react";
import { Container, Stack, Box, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "./selector";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { Messages, serverApi } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";
import { T } from "../../../lib/types/common";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrdersService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

/** REDUX  SELECTOR */
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);

interface ProcessOrdersProps {
  setValue: (input: string) => void;
}

export default function ProcessOrders(props: ProcessOrdersProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { processOrders } = useSelector(processOrdersRetriever);

  /**HANDLERS */
  const finishOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      // PAYMENT
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };

      const confirmation = window.confirm("Have you recieved your order?");

      if (confirmation) {
        const order = new OrdersService();
        await order.updateOrder(input);
        setValue("3");
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <TabPanel className={"table-panel"} value={"2"}>
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product?.productImages[0]}`;
                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img src={imagePath} className={"order-dish-img"} />
                      <p className={"title-dish"}>{product?.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                          src={"/icons/close.svg"}
                          alt=""
                        />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p className={"box-total-text"}>Produc Price</p>
                  <p className={"box-total-number"}>
                    ${order.orderTotal - order.orderDelivery}
                  </p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                  />
                  <p className={"box-total-text"}>Delivery Cost</p>
                  <p className={"box-total-number"}>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px", marginRight: "20px" }}
                  />
                  <p className={"box-total-text"}>Total</p>
                  <p className={"box-total-number"}>${order.orderTotal}</p>
                </Box>

                <Box className={"buttons-wrapper process-buttons"}>
                  <p className={"data"}>{moment().format("YY:MM:DD HH:mm")}</p>
                  <Button
                    value={order._id}
                    variant={"contained"}
                    className={"process-button"}
                    onClick={finishOrderHandler}
                  >
                    VERIFY TO FULFIL
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}

        {!processOrders ||
          (processOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src={"/icons/noimage-list.svg"}
                alt=""
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}