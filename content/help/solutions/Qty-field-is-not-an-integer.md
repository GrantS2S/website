---
title: "Qty Field Is Not an Integer"
issue: "Shopify: Qty field is not an integer"
type: "solution"
seoTitle: "Shopify: Qty field is not an integer"
seoDescription: "A SKU within the product is failing to be updated in the back-end of Shopify"
source: ""
channel: "shopify"
fulfillment: ""
process: "products"
headless: true
---

#### Error description
A SKU within the product is failing to be updated in the back-end of Shopify


#### Error solution
This error is caused by a mismatch between the warehouse used for the Shopify channel and the warehouse assigned to a particular SKU. In the case that a particular SKU does not pull stock from the warehouse assigned to the Shopify channel, but the product is set to sync to Shopify, it will create an error as attempts to sync a value that does not  exist.

Check that the SKU is in the warehouse assigned to the Shopify Channel

