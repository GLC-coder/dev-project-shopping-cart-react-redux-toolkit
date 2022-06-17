import { cartUiActions } from "./cartUi-slice";
import { cartActions } from "./cart-slice";
import CART_DATA_LINK from "../constant";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      cartUiActions.showNotification({
        status: "fetching",
        title: "Fetching",
        message: "Fetching ...",
      })
    );
    try {
      const respone = await fetch(CART_DATA_LINK);
      if (!respone.ok) {
        throw new Error("Something went wrong!");
      }
      const cartData = await respone.json();
      dispatch(
        cartUiActions.showNotification({
          status: "success",
          title: "success",
          message: "Fetch cart data successfully!",
        })
      );
      console.log(cartData)
      dispatch(cartActions.replaceCartItems({
        items: cartData.items || [],
        totalQuantity : cartData.totalQuantity
      }))
      
    } catch (error) {
      dispatch(
        cartUiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetch cart data failed!",
        })
      );
    }
  };
};


export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartUiActions.showNotification({
        status: "pending",
        title: "Pending",
        message: "Pending ...",
      })
    );
    try {
      const response = await fetch(CART_DATA_LINK, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      dispatch(
        cartUiActions.showNotification({
          status: "success",
          title: "success",
          message: "Send cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartUiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Send cart data failed!",
        })
      );
    }
  };
};
