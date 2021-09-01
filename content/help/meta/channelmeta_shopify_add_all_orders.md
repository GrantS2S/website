---
title: "Sync all shopify orders to your ERP / Accounting System"
name: "channelmeta_shopify"
key: "add_all_orders"
description: "If false only orders with paid status on Shopify will sync to the source. If true all orders are added to source regardless of order status."
user_friendly_description: "Regardless of the order status in Shopify (paid / pending / partially-paid), Stock2Shop will attempt to add all orders to your ERP / Accounting System. In general you would only want paid orders to be sent."
default: "false"
values: []
tags: [channelmeta,shopify]
type: "meta"
process: "orders"
headless: true
---