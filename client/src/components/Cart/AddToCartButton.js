import React from "react";
import { Mutation } from "react-apollo";
import Button from "../Button/Button";
import { ADD_TO_CART, GET_CART_TOTAL, GET_CART } from "../../constants";

const AddToCartButton = ({ productId }) => (
  <Mutation
    mutation={ADD_TO_CART}
    refetchQueries={[{ query: GET_CART }, { query: GET_CART_TOTAL }]}
  >
    {(addToCart) => (
      <Button onClick={() => addToCart({ variables: { productID } })}>
        {`+ ADD to cart`}
      </Button>
    )}
  </Mutation>
);

export default AddToCartButton;
