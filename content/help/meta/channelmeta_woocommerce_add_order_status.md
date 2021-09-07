---
title: "Status to sync orders to ERP / Accounting System"
name: "channelmeta_woocommerce"
key: "add_order_status"
description: "The woo commerce order status to use for adding an order to source."
user_friendly_description: "Determine which orders should be synced to your ERP / Accounting System based on their status. Generally, only once an order has been paid for and has a status of Processing should it sync."
default: "processing"
values: []
tags: [channelmeta,woocommerce]
type: "meta"
process: "orders"
headless: true
---