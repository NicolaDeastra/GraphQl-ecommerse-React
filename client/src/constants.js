import gql from "graphql-tag";

export const ADD_TO_CART = gql`
  mutation addToCart($productId: Int!) {
    addToCart(input: { productId: $productId }) {
      total
    }
  }
`;

export const GET_CART_TOTAL = gql`
  query getCartTotal {
    cart {
      total
    }
  }
`;

const GET_CART = gql`
    cart{
        total
        products{
            id
            title
            thumbnail
        }
    }
`;

export default GET_CART;
