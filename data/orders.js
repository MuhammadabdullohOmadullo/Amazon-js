export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder (order) {
  orders.unshift(order);
  saveToStorege();
}

function saveToStorege() {
  localStorage.setItem('orders', JSON.stringify(orders));
}