import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { sendCartData, fetchCartData } from "./store/cart-create-actions";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.cartUi.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cartUi.notification);
  
  useEffect(()=>{
    dispatch(fetchCartData())
    console.log("first")
  },[dispatch])


  useEffect(() => {

    if(isInitial) {
      isInitial = false;
      return;
    }
    if(cart.isChecked) {
      dispatch(sendCartData(cart))
   
    }
    
  }, [cart, dispatch]);

  
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
