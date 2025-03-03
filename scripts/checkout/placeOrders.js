/*
import { cart, addFromCart,updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentsummary.js";



export function placeOrders() {

  let placeOrdersHTML = '';

    cart.forEach((cartItem) => {
      const productId = cartItem.productId;

      const matchingProduct = getProduct(productId);

      const deliveryOptionId = cartItem.deliveryOptionId;

      const deliveryOption = getDeliveryOption(deliveryOptionId);

      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
    );

    placeOrdersHTML += `

      <div class="orders-grid js-orders-grid">
        <div class="order-container js-cart-item-container-${matchingProduct.id}"></div>

          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${dateString}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div> ${matchingProduct.getPrice()}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              ${matchingProduct.id}</div>
            </div>
          </div>

          <div class="order-details-grid">
            <div class="product-image-container">
              <img src="${matchingProduct.image}">
            </div>
          </div>
            <div class="product-details">
              <div class="product-name">
                 ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
              </div>
              <div class="product-quantity">
              ${cartItem.quantity}
              </div>
              <button class="buy-again-button button-primary js-buy-it-again-button">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>
    `;
});

  function deliveryOptionsHTML(matchingProduct,cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
    );

    const priceString = deliveryOption.priceCent
    === 0
    ? 'FREE'
    : `$${formatCurrency(deliveryOption.priceCent)} -`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    html += `
        <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
                <input type="radio"
                ${isChecked ? 'checked' : ''}
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}">
                <div>
                  <div class="delivery-option-date">
                    ${dateString}
                  </div>
                  <div class="delivery-option-price">
                    ${priceString} Shipping
                  </div>
                </div>
              </div>
      `
    });

    return html;

  }

  document.querySelector('.orders-grid').innerHTML = placeOrdersHTML;


  document.querySelectorAll('.js-buy-it-again-button')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        addFromCart(productId);

      const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.add();

        placeOrders();
      });
    });

    document.querySelectorAll('.js-delivery-option')
  .forEach((element) => {
    element.addEventListener('click', () => {
      const {productId, deliveryOptionId} = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      placeOrders();
      renderPaymentSummary();
    });
    });


  }
*/