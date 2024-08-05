import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import  RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import  ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CardOverflow, CssVarsProvider } from "@mui/joy";
import { AspectRatio } from "@mui/icons-material";
import {useDispatch, useSelector } from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";

// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({products}))

const products = [
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
    return (
      <div className={"products"}>
        <Container>
          <Stack flexDirection={"column"} alignItems={"center"}>
            <Stack className={"avatar-big-box"}>
              <Stack className={"avatar-wrapper"}>
                <Box className={"category-title"}>Burak Restaurant</Box>
                <Box className={"search-wrapper"}>
                  <input
                    className={"search-input"}
                    type="search"
                    id="product-search"
                    name="searched-product"
                    placeholder="Type here"
                  />
                  <Button className={"search-button"} variant="contained">
                    Search
                    <SearchIcon className={"search-icon"} />
                  </Button>
                </Box>
              </Stack>
            </Stack>
            <Stack className={"dishes-filter-section"}>
              <Stack className={"dishes-filter-box"}>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  className={"order"}
                >
                  New
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  Price
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  className={"order"}
                >
                  Views
                </Button>
              </Stack>
            </Stack>
  
            <Stack className={"list-category-section"} flexDirection={"row"}>
              <Stack className={"product-category"}>
                <div className="category-main">
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    <div>Other</div>
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    Dessert
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    Drink
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"secondary"}
                    className={"order"}
                  >
                    Salad
                  </Button>
                  <Button
                    variant={"contained"}
                    color={"primary"}
                    className={"order"}
                  >
                    Dish
                  </Button>
                </div>
              </Stack>
              <Stack className={"product-wrapper"}>
                {products.length !== 0 ? (
                  products.map((product, index) => {
                    return (
                      <Stack key={index} className={"product-card"}>
                        <Stack
                          className={"product-img"}
                          sx={{ backgroundImage: `url(${product.imagePath})` }}
                        >
                          <div className="product-sale">Normal Size</div>
                          <div className="view-wrapper">
                            <Button className={"shop-btn"}>
                              <img
                                src={"/icons/shopping-cart.svg"}
                                style={{ display: "flex" }}
                                alt=""
                              />
                            </Button>
                            <Button className={"view-btn"} sx={{ right: "36px" }}>
                              <Badge badgeContent={20} color="secondary">
                                <RemoveRedEyeIcon
                                  sx={{ color: 20 ? "gray" : "white" }}
                                />
                              </Badge>
                            </Button>
                          </div>
                        </Stack>
  
                        <Box className={"product-descs"}>
                          <span className={"product-title"}>
                            {product.productName}
                          </span>
                          <div className="product-desc">
                            <MonetizationOnIcon className={"dollar-icon"} />
                            15
                          </div>
                        </Box>
                      </Stack>
                    );
                  })
                ) : (
                  <Box className="no-data">Products are not available!</Box>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Stack className={"pagination-wrapper"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Container>
  
        <div className="brands-logo">
          <Container>
            <Stack className={"brands-logo-categories"}>
              <Stack className={"brands-logo-categories"}>
                <Box className={"brands-logo-title"}>Our Family Brands</Box>
              </Stack>
              <Stack className={"members-wrapper"}>
                <div className="brand-img-wrapper">
                  <img className={"member-img"} src="/img/gurme.webp" alt="" />
                </div>
                <div className="brand-img-wrapper">
                  <img className={"member-img"} src="/img/seafood.webp" alt="" />
                </div>
                <div className="brand-img-wrapper">
                  <img className={"member-img"} src="/img/sweets.webp" alt="" />
                </div>
                <div className="brand-img-wrapper">
                  <img className={"member-img"} src="/img/doner.webp" alt="" />
                </div>
              </Stack>
            </Stack>
          </Container>
        </div>
  
        <div className="address">
          <Container>
            <Stack className={"address-area"}>
              <Box className={"title"}>Our address</Box>
              <iframe
                style={{ marginTop: "60x" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.294937416325!2d55.278124775509866!3d25.193274331859396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6955cdc0a649%3A0xf08ece466df23124!2sCZN%20Burak%20Dubai!5e0!3m2!1sen!2skr!4v1721117848383!5m2!1sen!2skr"
                height="500"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Stack>
          </Container>
        </div>
      </div>
    );
  }