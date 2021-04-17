import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import CartProvider from "./providers/cart/cartProvider";

import "./index.css";
import App from "./App";


// you can wrapper it above redux 
ReactDOM.render(
  <Provider store={store}>
    <CartProvider.Provider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </CartProvider.Provider>
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
