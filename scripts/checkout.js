import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import { placeOrders } from "./checkout/placeOrders.js";
//import '../data/cart-class.js';

async function loadPage() {
  await loadProductsFetch();

 const value = await new Promise ((resolve) => {
    loadCart(() => {
      resolve('value3');
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
  placeOrders();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise ((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/