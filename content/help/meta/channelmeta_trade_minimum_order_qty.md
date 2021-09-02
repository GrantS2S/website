---
title: "Set a minimum order quantity"
name: "channelmeta_trade"
key: "minimum_order_qty"
description: "The minimum qty each product must be ordered in. This is usually set on the actual product meta. See the solution https://stock2shop.freshdesk.com/a/solutions/articles/19000108765"
user_friendly_description: "You can set a standard minimum order qty per product if required. When using this setting each product will have the same minimum order quality. If you ERP / Accounting system supports unit of measure we can programmatically set the minimum order quantity to be the lowest unit of measure per specific product. This will require custom development."
default: "1"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "orders"
headless: true
---