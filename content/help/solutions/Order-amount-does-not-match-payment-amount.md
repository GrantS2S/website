---
title: "Order Amount Does Not Match Payment Amount"
issue: "B2B Trade Store: Order Amount Does Not Match Payment Amount"
type: solution
seoTitle: "B2B Trade Store - Order Amount Does Not Match Payment Amount"
seoDescription: "error can occur frequently if you have a rate based on cart shipping_method."
source:  ""
channel: "b2b-trade-store"
fulfillment: ""
process: "orders"
headless: true
---

#### Queue Error Description
This error can occur frequently if you have a shipping  method based on the cart.
When the quantity is adjusted in the cart of the checkout page, it adjusts the shipping cost (cart based rate) value. 
This does not update the cached value of the order total.

#### How to resolve Queue Error
If your Trade Store has a shipping method based on the, you will need to notify your B2B customers that they should refresh their page before placing the order on the trade store to prevent this from occurring.

Alternatively, you can follow these steps:
- Skip the queue error and recreate the order on the Trade Store ensuring to first refresh your browser before checking out
- Open the order in question by navigating to the Stock2Shop console > Orders > View
- Search for the order that has not processed 
- Click on the three dots of the order > View
- Check all the order data to ensure everything is correct ie, Shipping values and line item totals
- If the order data is correct click the green "SEND" button - This will then create the order in your ERP
- Navigate to the Queue > View 
- Skip the error related to the order that was just processed