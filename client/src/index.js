import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import CartProvider from "./providers/cart/CartProvider";

import "./index.css";
import App from "./App";


// you can wrapper it above redux 
ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </CartProvider>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );
