---
title: "Exception: Number Required for Key Source_variant_code, Param Is Str"
issue: "Evolution: No Quantity available for Order item"
type: "solution"
seoTitle: "No Quantity available for Order item"
seoDescription: "There is no quantity available for the Ordered item in Stock2Shop"
source: "sage-200-evolution"
channel: ""
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
When trying to raise an order, the system can't find a qty for the product.

#### Error solution
Stock2Shop validates the qty available before raising the order. This amount is not returned if the source_variant_code is not found.

In order to resolve this error you will need to contact Support@stock2shop.com for assistance:
- Ensure the SKU is in your ERP
- You may require development to update the field that is syncing for the source_variant_code 
- Adjust the setting "param_negative_stock_disabled" to be FALSE so the system will not check the stock