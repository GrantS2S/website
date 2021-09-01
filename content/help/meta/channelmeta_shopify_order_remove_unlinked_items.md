---
title: "Only process order items that exist in Stock2Shop"
name: "channelmeta_shopify"
key: "order_remove_unlinked_items"
description: "If false order line items will be as per Shopify order in S2S and If true, order line items not found in S2S will be removed from the order"
user_friendly_description: "If orders are sent to Stock2Shop with items that do not appear in Stock2Shop, you have the option of either removing the items and syncing the order to your ERP / Accounting System, or be notified that the item was not found in Stock2Shop and the order will not be sent to your ERP / Accounting System."
default: "false"
values: []
tags: [channelmeta,shopify]
type: "meta"
process: "orders"
headless: true
---