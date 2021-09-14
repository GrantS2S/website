---
title: "Undefined variable: variant"
issue: "WooCommerce: Undefined variable: variant"
type: "solution"
seoTitle: "WooCommerce : Undefined variable: variant"
seoDescription: "There is a SKU on the order that does not exist in S2S."
source: ""
channel: "woocommerce"
fulfillment: ""
process: "orders"
headless: true
---



#### Error description
There is a SKU on the order that does not exist in S2S.

#### Error solution
 You need to identify the SKU and resolve what action to take

**How to find the offending SKU**

- Login to S2S console
- Navigate to Queue > View
- Click on the three dots of the error > Click "View Item"
- Scroll down in the grey block and look for 

{{< highlight go >}}
"SKU": "xyz"
{{< /highlight >}}

- Search each SKU in the Stock2shop Console (*Products > View) to find which SKU is causing the error. The offending SKU will not be found in S2S.

Note: look through all the SKU's on the order to ensure there is not more than one causing errors.

**Correcting missing SKUs**

Once you have found which SKU is not syncing to S2S, there would be a couple of ways to resolve the error, first confirm if the SKU should be syncing from your ERP/Accounting system

- Mark the SKU as Active to sync using your S2S Active field in the ERP/Accounting System
- Wait for the product to sync through to S2S and link to the channel
- Navigate to the queue error and click "Try Again"

