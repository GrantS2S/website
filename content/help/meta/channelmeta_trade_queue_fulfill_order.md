---
title: "Fulfill orders"
name: "channelmeta_trade"
key: "queue_fulfill_order"
description: "Queue fulfill_order item after adding order to source or if the source has add_order_disabled"
user_friendly_description: "Once an order has been raised in your ERP / Accounting system, let Stock2Shop send off an automatic fulfillment request to your fulfillment service."
default: "true"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "fulfillments"
headless: true
---