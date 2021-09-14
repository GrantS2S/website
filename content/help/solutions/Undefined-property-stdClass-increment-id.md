---
title: "Undefined Property StdClass Increment Id"
issue: "Magento 1.x: Undefined Property StdClass Increment Id"
type: "solution"
seoTitle: "Magento: Undefined Property StdClass Increment Id"
seoDescription: "S2S is trying to sync an order from Magento with an external order number that already exists in S2S."
source: ""
channel: "magento_1"
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
S2S is trying to sync an order from Magento with an external order number (passed on the increment ID field) that already exists in S2S.

#### Error solution
- Navigate to Queue -> View
- 3 dots > View Item
- Search for and copy "increment_id" value
- Navigate to Orders -> View
- Search the increment id, which in S2S is displayed as "Channel Code"
- If increment_id is found, then order number already exists in S2S.

Once the error is confirmed, it is likely that the order is a duplicate. Confirm order details against those found in S2S, and the order can be skipped.

If you need to process the order and the same order number in Stock2Shop has different details then please create the order manually in your ERP / Accounting System or/and fulfillment service as our system won't accept an order number that is already taken by another customer

