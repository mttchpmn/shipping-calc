# Shipping Calc

Typescript utility for calculating the cost of shipping an order of parcels.

## Usage

Create a new shipping order and calculate the total cost.

```typescript
// Create some order items
const orderItems = [
  {
    width: 5,
    height: 7,
    depth: 9,
  },
  {
    width: 10,
    height: 5,
    depth: 4,
  },
  {
    width: 7,
    height: 3,
    depth: 155555,
  },
];

// Create a new shipping Order
const order = new Order(orderItems);

// Get total shipping cost
const totalCost = order.totalCost;

// Get order summary
const orderSummary = order.summary;
```
