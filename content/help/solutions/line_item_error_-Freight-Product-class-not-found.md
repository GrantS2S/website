---
title: "line_item_error: Freight Product class not found"
type: "solution"
seoTitle: "Syspro - line_item_error: Freight Product class not found"
seoDescription: " a non existent shipping line item is being added which causes the order to fail."
sources: ["syspro" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-30T10:55:00+02:00
---
<!-- Action: sync_order -->
#### Error description
When raising an order in Syspro, a non existent shipping line item is being added which causes the order to fail.


#### Error solution
You will need to create a service line item in Syspro for shipping, if not already created. Provide Stock2Shop with the item code for the service line item. Stock2Shop will then add it as a parameter to your source configuration.

param_shipping_code:  (Service line item SKU)

You will then need to retry the failed order.

