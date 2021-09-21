---
title: "Check ordered items exist in Stock2Shop"
name: "channelmeta_magento2"
key: "check_order_items_linked"
description: "If false allows orders to be raised to source without having corresponding variant/SKU in S2S.(SKU code must exist in accounting system.)"
user_friendly_description: "Stock2Shop can compare your order line items to the inventory synced to our system and ensure that the items contained in orders, also appear in Stock2Shop. If this is not a requirement we can simply send the order to your ERP / Accounting System without checking."
default: "false"
values: []
tags: [channelmeta,magento2,magento-2]
type: "meta"
process: "orders"
headless: true
---