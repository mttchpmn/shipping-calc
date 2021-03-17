# Shipping Calc

Typescript utility for calculating the cost of shipping an order of parcels.

## Installation

Coming soon!

## Usage

Create a new shipping order and calculate the total cost.

```typescript
// Create some order items
const orderItems = [
  {
    width: 5,
    height: 7,
    depth: 9,
    weight: 1
  },
  {
    width: 10,
    height: 5,
    depth: 4,
    weight: 1
  },
  {
    width: 7,
    height: 3,
    depth: 1,
    weight: 1
  },
];

// Create a new shipping Order
const order = new Order(orderItems);

// Get total shipping cost
const totalCost = order.totalCost;

// Get order summary
const orderSummary = order.summary;

// Create an order with fast shipping (doubles the total cost)
const fastOrder = new Order(orderItems, true);
```

## Contributing

Coming soon!

## TODO

- Implement remaining steps (4 & 5)
- Extend Parcel class using polymorphism
- Abstract and improve parcel cost calculation method
- Utilise helper library for generating random test inputs
- Abstract parcel config into own class, exposing API for getting and setting parcel config sizes
- Implement config validation for asserting no overlap exists between parcel sizes
- Add JSDoc documentation for classes and usage
- Add missing sections to README
- Publish to NPM so package consumers may install
- Implement CI/CD pipeline using Github workflows
- Implement code coverage reporting
- Move each class/interface to its own file
- Remove unneccessary duplication of interface/input types
