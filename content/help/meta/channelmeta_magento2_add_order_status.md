---
title: "Status to sync orders to ERP / Accounting System"
name: "channelmeta_magento2"
key: "add_order_status"
description: "The Magento 2 order status to use for adding an order to source. There must be a corresponding add_order_status property on the order_map."
user_friendly_description: "Determine which orders should be synced to your ERP / Accounting System based on their status. Generally, only once an order has been paid for and has a status of Processing should it sync."
default: "processing"
values: []
tags: [channelmeta,magento2,magento-2]
type: "meta"
process: "orders"
headless: true
---