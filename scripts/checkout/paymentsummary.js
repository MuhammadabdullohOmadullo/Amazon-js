import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import {formatCurrency} from "../utils/money.js";
import { addOrder } from "../../data/orders.js";

export function renderPaymentSummary() {
  let  productPriceCents = 0;
  let shippingPriceCents = 0;

cart.forEach((cartItem) => {
  const product = getProduct(cartItem.productId);
  productPriceCents += product.priceCents * cartItem.quantity;

  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  shippingPriceCents += deliveryOption.priceCent;

  });
const totalBeforetaxtCents = productPriceCents + shippingPriceCents;
const taxtCents = totalBeforetaxtCents * 0.1;
const totalCents = totalBeforetaxtCents + taxtCents;

const paymentSummaryHTML =
`
  <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">
            $${formatCurrency( productPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
             <div class="payment-summary-money">
            $${formatCurrency(shippingPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
            $${formatCurrency(totalBeforetaxtCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
            $${formatCurrency(taxtCents)}
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
            $${formatCurrency(totalCents)}
            </div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
`;

document.querySelector('.js-payment-sumamary')
.innerHTML = paymentSummaryHTML;

document.querySelector('.js-place-order')
  .addEventListener('click', async () => {
    const resposnse = await fetch('https://supersimplebackend.dev/orders', {
      method: 'POST',
      headers: {
        'Contnet-Type': 'application/json'
      },
      body: JSON.stringify({
        cart: cart
      })
    });

    const order = await resposnse.json();
    addOrder(order);

    window.location.href = 'orders.html';
  });
}